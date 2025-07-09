import ContactUsPageObject from "../objects/ContactUsPageObject.cy";

const form=new ContactUsPageObject()

it('Test First name Empty validation', () => {

      cy.visit('https://nicdoweb.com/')
      cy.wait(1000)

      form.clickContact()
      form.scrollContact()
      // // form.FirstNameValidation(testCase)
      form.EmptySubmitForm()
})

const firstNameTestCases = [
  { input: '123456', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: '@username', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  { input: 'John_Doe', expectedError: 'First name cannot start with a dot, end with a hyphen, or contain invalid characters' },
  // { input: ' '},
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



// describe('Name Field Validation', () => {
//   firstNameTestCases.forEach((testCase, index) => {
//     it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
//       cy.visit('https://nicdoweb.com/')
//        cy.wait(1000)

//       form.clickContact()
//       form.scrollContact()
//       form.FirstNameValidation(testCase)
//       form.SubmitForm()

//       if (testCase.expectedError) {
//         cy.contains(testCase.expectedError)
//       } else {
        
//         cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
//       }
      
//     });
//   });
// });









const lastNameTestCases = [
  { input: '123456', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '@username', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'John_Doe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
//   { input: 'A', expectedError: 'First name must be at least 2 characters' },
  { input: 'John Doe 123', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '"John Doe"', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'John!@#Doe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'John@Doe.com', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '123 Main Street', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'Jane-Doe-', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'Mr. & Mrs. Smith', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'OConnor!', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '👨‍💻🚀🎉', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'Doe, John', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'John\tDoe', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'Doe-John!', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '__________', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: '(John Doe)', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'SELECT * FROM users;', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: 'alert("Hacked!")', expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
  { input: "alert('XSS')", expectedError: 'Last name cannot start with a dot or contain invalid characters (no comma allowed)' },
];



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