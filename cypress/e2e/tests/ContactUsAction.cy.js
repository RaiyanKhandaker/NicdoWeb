import ContactUsPageObject from "../objects/ContactUsPageObject.cy";

const form=new ContactUsPageObject()

it('Test First name Empty validation', () => {

      cy.visit('https://nicdoweb.com/')
      cy.wait(1000)

      form.clickContact()
      form.scrollContact()
      form.EmptySubmitForm() //Empty form validation
})




// Test cases for first name validation
const firstNameTestCases = [ 
  { input: '123456', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '@username', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John_Doe', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John Doe 123', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '"John Doe"', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John!@#Doe', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John@Doe.com', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '123 Main Street', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'Jane-Doe-', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'Mr. & Mrs. Smith', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'OConnor!', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '👨‍💻🚀🎉', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'Doe, John', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John\tDoe', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'Doe-John!', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '__________', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '(John Doe)', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'SELECT * FROM users;', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'alert("Hacked!")', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: "alert('XSS')", expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
];





//excecute test cases for first name validation
describe('Name Field Validation', () => { 
  firstNameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')
       cy.wait(1000)

      form.clickContact()
      form.scrollContact()
      form.FirstNameValidation(testCase)
      form.NameSubmitForm()

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError)
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});







//  //commented out test cases for last name validation

// const lastNameTestCases = [
//   { input: '123456', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '@username', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'John_Doe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
// //   { input: 'A', expectedError: 'First name must be at least 2 characters' },
//   { input: 'John Doe 123', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '"John Doe"', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'John!@#Doe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'John@Doe.com', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '123 Main Street', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'Jane-Doe-', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'Mr. & Mrs. Smith', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'OConnor!', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '👨‍💻🚀🎉', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'Doe, John', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'John\tDoe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'Doe-John!', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '__________', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: '(John Doe)', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'SELECT * FROM users;', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'alert("Hacked!")', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: "alert('XSS')", expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
// ];



// describe('Name Field Validation', () => {
//   lastNameTestCases.forEach((testCase, index) => {
//     it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
//       cy.visit('https://nicdoweb.com/')

//       form.clickContact()
//       form.scrollContact()
//       form.TypeFirstName()
//       form.LastNameValidation(testCase)
//       form.submitForm()

//       if (testCase.expectedError) {
//         cy.contains(testCase.expectedError)
//       } else {
        
//         cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
//       }
      
//     });
//   });
// });






//invalid email test cases part 1
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



//invalid email test cases part 2
const badEmails2 = [ 
  'username@.com',
  'username@domain..com',
  'username@domain..co.uk',
  'username@.sub.domain.com',
  'user_name@domain..com'

]




//invalid email test cases part 3
const badEmails3 = [ 
  'username@-domain.com',
  'username@domain-.com'
]




 //excecute test cases for invalid email test cases part 1
badEmails1.forEach((email) => { 
  it(`Email validation "${email}"`, () => {
    cy.visit('https://nicdoweb.com/')

    form.clickContact()
    form.scrollContact()
    form.TypeName()

    // Loop through the bad emails
    cy.get('#email')
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


      form.EmailFormSubmit()
  })
})




 //excecute test cases for invalid email test cases part 1
badEmails2.forEach((email) => {
  it(`Email validation "${email}"`, () => {
    cy.visit('https://nicdoweb.com/')

    form.clickContact()
    form.scrollContact()
    form.TypeName()

    // Loop through the bad emails
    cy.get('#email')
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


      form.EmailFormSubmit()
  })
})



 //excecute test cases for invalid email test cases part 3
badEmails3.forEach((email) => {
  it(`Email validation "${email}"`, () => {
    cy.visit('https://nicdoweb.com/')

    form.clickContact()
    form.scrollContact()
    form.TypeName()

    // Loop through the bad emails
    cy.get('#email')
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


      form.EmailFormSubmit()
  })
})



//invalid email test cases part 4
const emailTestCases = [
  { input: 'username@com', expectedError: 'Please enter a valid email address' }, 
  { input: 'username@domain.c', expectedError: 'Please enter a valid email address' },
  { input: '.username@email.com', expectedError: 'Email cannot start with a dot' },
  { input: 'user..name@domain.com', expectedError: 'Email cannot contain double dots' } 
];



//excecute test cases for invalid email test cases part 4
describe('Email Field Validation', () => {
  emailTestCases.forEach((testCase, index) => {
    it(`Email test ${index + 1}: "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')

      form.clickContact()
      form.scrollContact()
      form.TypeName()
      form.EmailValidation(testCase)
      form.EmailFormSubmit()
      

      if (testCase.expectedError) {
            cy.contains(testCase.expectedError).should('be.visible');
        } else {
            cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
        }

    });
  });
});