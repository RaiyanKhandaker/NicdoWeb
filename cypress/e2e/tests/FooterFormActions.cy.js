import FooterFormObjects from "../objects/FooterFormObjects.cy";


const footerForm = new FooterFormObjects()

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



describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')
      cy.wait(2000)

      footerForm.ScrollToFooter()
      footerForm.ClickTellUsForm()
      footerForm.NameValidation(testCase)
      footerForm.SubmitForm()
      
    //   footerForm.ScrollToFooter()
    //   footerForm.clic
      
      

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError).should('be.visible');
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});




const emailTestCases = [
  // { input: 'plainaddress', expectedError: '' }, 
  // { input: '@missinglocal.com', expectedError: 'Invalid email address' },
  // { input: 'username@.com', expectedError: 'Invalid email address' }, //wrong
  { input: 'username@com', expectedError: 'Please enter a valid email address.' }, //test case
  // { input: 'username@domain..com', expectedError: 'Email cannot contain double dots' },//wrong
  // { input: 'username@domain,com', expectedError: 'Invalid email address' },
  // { input: 'username@domain@another.com', expectedError: 'Invalid email address' },
  { input: 'username@domain.c', expectedError: 'Please enter a valid email address.' }, //test case
  { input: '.username@email.com', expectedError: 'Email cannot start with a dot.Please enter a valid email address.' },//test case
  // { input: 'username@-domain.com', expectedError: 'Invalid email address' }, //test case
  // { input: 'username@domain-.com', expectedError: 'Invalid email address' }, //test case
  // { input: 'username@domain..co.uk', expectedError: 'Email cannot contain double dots' },//wrong
  // { input: '"username"@domain.com', expectedError: 'Invalid email address' },
  // { input: 'user@name@domain.com', expectedError: 'Invalid email address' },
  // { input: 'username@.sub.domain.com', expectedError: 'Invalid email address' }, //wrong
  { input: 'user..name@domain.com', expectedError: 'Email cannot contain double dots.Please enter a valid email address.' } //test case
  // { input: 'user_name@domain..com', expectedError: 'Email cannot contain double dots' }, //wrong
  // { input: 'user@domain#$.com', expectedError: 'Invalid email address' },
  // { input: 'user@[192.168.1.1]', expectedError: 'Invalid email address' }
];


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


const badEmails2 = [
  'username@.com',
  'username@domain..com',
  'username@domain..co.uk',
  'username@.sub.domain.com',
  'user_name@domain..com'

]


const badEmails3 = [
  'username@-domain.com',
  'username@domain-.com'
]





badEmails1.forEach((email) => {
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
          expect(msg).to.include('@')
        }
      })


      footerForm.SubmitForm()
  })
})



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

