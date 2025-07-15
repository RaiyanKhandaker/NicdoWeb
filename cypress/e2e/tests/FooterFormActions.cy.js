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




//Invalid email test cases part 4
const emailTestCases = [
  { input: 'username@com', expectedError: 'Please enter a valid email address.' }, 
  { input: 'username@domain.c', expectedError: 'Please enter a valid email address.' },
  { input: '.username@email.com', expectedError: 'Email cannot start with a dot.Please enter a valid email address.' },
  { input: 'user..name@domain.com', expectedError: 'Email cannot contain double dots.Please enter a valid email address.' } 
];



//excecute test cases for invalid email test cases part 4
describe('Email Field Validation', () => {
  emailTestCases.forEach((testCase, index) => {
    it(`Email test ${index + 1}: "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')

      footerForm.ScrollToFooter()
      footerForm.ClickTellUsForm()
      footerForm.TypeName()
      footerForm.EmailValidation(testCase)
      footerForm.SubmitForm()

      if (testCase.expectedError) {
            cy.contains(testCase.expectedError).should('be.visible');
        } else {
            cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
        }

    });
  });
});



//Invalid email test cases part 1
const badEmails1 = [
  'plainaddress',
  '@missinglocal.com',
  'username@domain@another.com',
  'user@domain#$.com',
  'user@name@domain.com',
  '"username"@domain.com',
  'username@domain,com',
  'user@[192.168.1.1]'
];


//Invalid email test cases part 2
const badEmails2 = [
  'username@.com',
  'username@domain..com',
  'username@domain..co.uk',
  'username@.sub.domain.com',
  'user_name@domain..com'

]


//Invalid email test cases part 3
const badEmails3 = [
  'username@-domain.com',
  'username@domain-.com'
]




//excecute test cases for invalid email test cases part 1
badEmails1.forEach((email) => {
  it(`Email validation "${email}"`, () => {
    cy.visit('https://nicdoweb.com/')
    // footerForm.ScrollToFooter()
    footerForm.ClickTellUsForm()
    footerForm.TypeName()

    // Loop through the bad emails
    cy.get("form[class='space-y-5 text-accent'] input[placeholder='Email*']")
      .clear()
      .type(email)
      .blur()                            
      .then($input => {
        const msg = $input[0].validationMessage
        if (email === '') {
          expect(msg).to.eq('Please fill out this field.')
        } else {
          expect(msg).to.include('@')
        }
      })


      footerForm.SubmitForm()
  })
})




//excecute test cases for invalid email test cases part 2
badEmails2.forEach((email) => {
  it(`Email validation "${email}"`, () => {
    // visit & open your form as usual…
    cy.visit('https://nicdoweb.com/')
    // footerForm.ScrollToFooter()
    footerForm.ClickTellUsForm()
    footerForm.TypeName()

    // Loop through the bad emails
    cy.get("form[class='space-y-5 text-accent'] input[placeholder='Email*']")
      .clear()
      .type(email)
      .blur()                            
      .then($input => {
        const msg = $input[0].validationMessage
        if (email === '') {
          expect(msg).to.eq('Please fill out this field.')
        } else {
          expect(msg).to.include('wrong')
        }
      })


      footerForm.SubmitForm()
  })
})




//excecute test cases for invalid email test cases part 3
badEmails3.forEach((email) => {
  it(`Email validation "${email}"`, () => {
    // visit & open your form as usual…
    cy.visit('https://nicdoweb.com/')
    // footerForm.ScrollToFooter()
    footerForm.ClickTellUsForm()
    footerForm.TypeName()

    // Loop through the bad emails
    cy.get("form[class='space-y-5 text-accent'] input[placeholder='Email*']")
      .clear()
      .type(email)
      .blur()                            
      .then($input => {
        const msg = $input[0].validationMessage
        if (email === '') {
          expect(msg).to.eq('Please fill out this field.')
        } else {
          expect(msg).to.include('Please enter an email address.')
        }
      })


      footerForm.SubmitForm()
  })
})

