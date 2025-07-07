import HomeFormObjects from "../objects/HomeFormObjects.cy";

const form=new HomeFormObjects();


const nameTestCases = [
  { input: '123456', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '@username', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'John_Doe', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'A', expectedError: 'First name must be at least 2 characters' },
  { input: 'John Doe 123', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '"John Doe"', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'John!@#Doe', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'John@Doe.com', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '123 Main Street', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'Jane-Doe-', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'Mr. & Mrs. Smith', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'OConnor!', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '👨‍💻🚀🎉', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'Doe, John', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'John\tDoe', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'Doe-John!', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '__________', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: '(John Doe)', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'SELECT * FROM users;', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: 'alert("Hacked!")', expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
  { input: "alert('XSS')", expectedError: 'Only letters, spaces, dots, hyphens, apostrophes (2-50 chars, no comma, no starting dot)' },
];



describe('Name Field Validation', () => {
  nameTestCases.forEach((testCase, index) => {
    it(`Test ${index + 1}: Name = "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')

      form.scrollContactUs()
      form.NameValidation(testCase)
      form.ForNameValidation()

      if (testCase.expectedError) {
        cy.contains(testCase.expectedError).should('be.visible');
      } else {
        
        cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
      }
      
    });
  });
});


const emailTestCases = [
  { input: 'plainaddress', expectedError: 'Invalid email address' },
  { input: '@missinglocal.com', expectedError: 'Invalid email address' },
  { input: 'username@.com', expectedError: 'Invalid email address' },
  { input: 'username@com', expectedError: 'Invalid email address' },
  { input: 'username@domain..com', expectedError: 'Email cannot contain double dots' },
  { input: 'username@domain,com', expectedError: 'Invalid email address' },
  { input: 'username@domain@another.com', expectedError: 'Invalid email address' },
  { input: 'username@domain.c', expectedError: 'Invalid email address' },
  { input: '.username@email.com', expectedError: 'Email cannot start with a dot' },
//   { input: 'username@-domain.com', expectedError: 'Invalid email address' },
//   { input: 'username@domain-.com', expectedError: 'Invalid email address' },
  { input: 'username@domain..co.uk', expectedError: 'Email cannot contain double dots' },
  { input: '"username"@domain.com', expectedError: 'Invalid email address' },
  { input: 'user@name@domain.com', expectedError: 'Invalid email address' },
  { input: 'username@.sub.domain.com', expectedError: 'Invalid email address' },
  { input: 'user..name@domain.com', expectedError: 'Email cannot contain double dots' },
  { input: 'user_name@domain..com', expectedError: 'Email cannot contain double dots' },
  { input: 'user@domain#$.com', expectedError: 'Invalid email address' },
  { input: 'user@[192.168.1.1]', expectedError: 'Invalid email address' }
];


describe('Email Field Validation', () => {
  emailTestCases.forEach((testCase, index) => {
    it(`Email test ${index + 1}: "${testCase.input}"`, () => {
      cy.visit('https://nicdoweb.com/')

      form.scrollContactUs()
      form.EmailValidation(testCase)

      if (testCase.expectedError) {
            cy.contains(testCase.expectedError).should('be.visible');
        } else {
            cy.contains('Failed to submit your quote request. Please try again.').should('be.visible'); 
        }

    });
  });
});
