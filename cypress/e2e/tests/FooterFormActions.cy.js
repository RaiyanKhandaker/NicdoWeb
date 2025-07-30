import FooterFormObjects from "../objects/FooterFormObjects.cy";


const footerForm = new FooterFormObjects()


// Test cases for first name validation
const nameTestCases = [
  { input: '123456', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '@username', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'John_Doe', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'A', expectedError: 'Name must be at least 2 characters.' },
  { input: 'John Doe 123', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '"John Doe"', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'John!@#Doe', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'John@Doe.com', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '123 Main Street', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'Jane-Doe-', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'Mr. & Mrs. Smith', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'OConnor!', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '👨‍💻🚀🎉', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'Doe, John', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'John\tDoe', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'Doe-John!', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '__________', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: '(John Doe)', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'SELECT * FROM users;', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: 'alert("Hacked!")', expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
  { input: "alert('XSS')", expectedError: 'Name can only contain letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot).' },
];




//excecute test cases for name validation
describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')
      cy.wait(2000)

      footerForm.ScrollToFooter()
      footerForm.ClickTellUsForm()
      footerForm.NameValidation(testCase)
      footerForm.SubmitForm()
     

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError).should('be.visible');
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});




describe('Email Field Validation', () => {
  // Shared setup for every test
  beforeEach(() => {
    cy.visit('https://nicdoweb.com/');
    footerForm.ScrollToFooter();
    footerForm.ClickTellUsForm();
    footerForm.TypeName('Test User');
  });

  //
  // PARTS 1–3: Browser-native <input>.validationMessage tests
  //
  const browserValidationGroups = [
    {
      name: 'Part 1 – must include "@"',
      emails: [
        'plainaddress',
        '@missinglocal.com',
        'username@domain@another.com',
        'user@domain#$.com',
        'user@name@domain.com',
        '"username"@domain.com',
        'username@domain,com',
        'user@[192.168.1.1]'
      ],
      assertMsg: (msg) => expect(msg).to.include('@')
    },
    {
      name: 'Part 2 – must include "wrong"',
      emails: [
        'username@.com',
        'username@domain..com',
        'username@domain..co.uk',
        'username@.sub.domain.com',
        'user_name@domain..com'
      ],
      assertMsg: (msg) => expect(msg).to.include('wrong')
    },
    {
      name: 'Part 3 – must include full “Please enter an email address.”',
      emails: [
        'username@-domain.com',
        'username@domain-.com'
      ],
      assertMsg: (msg) => expect(msg).to.include('Please enter an email address.')
    }
  ];

  browserValidationGroups.forEach(({ name, emails, assertMsg }) => {
    describe(name, () => {
      emails.forEach(email => {
        it(`"${email}" → browser validation`, () => {
          cy.get("form.space-y-5.text-accent input[placeholder='Email*']")
            .clear()
            .type(email)
            .blur()
            .then($input => {
              const msg = $input[0].validationMessage;
              assertMsg(msg);
            });
        });
      });
    });
  });

  //
  // PART 4: Custom UI error messages under the form
  //
  const uiErrorTests = [
    { input: 'username@com', expectedError: 'Please enter a valid email address.' },
    { input: 'username@domain.c', expectedError: 'Please enter a valid email address.' },
    { input: '.username@email.com', expectedError: 'Email cannot start with a dot.Please enter a valid email address.' },
    { input: 'user..name@domain.com', expectedError: 'Email cannot contain double dots.Please enter a valid email address.' }
  ];

  describe('Part 4 – UI error messages', () => {
    uiErrorTests.forEach(({ input, expectedError }, idx) => {
      it(`Case ${idx + 1}: "${input}" shows "${expectedError}"`, () => {
        cy.get("form.space-y-5.text-accent input[placeholder='Email*']")
          .clear()
          .type(input);

        footerForm.SubmitForm();

        cy.contains(expectedError).should('be.visible');
      });
    });
  });
});


