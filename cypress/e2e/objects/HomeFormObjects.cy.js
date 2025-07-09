class HomeFormObjects {

    FirstName = "input[placeholder='First name*']"
    LastName = "input[placeholder='Last name']"
    Email = "input[placeholder='Email*']"
    Phone = "input[placeholder='Phone number']"
    Message = "input[placeholder='Message*']"
    Submit = "button[type='submit']"

    scrollContactUs(){
        
     {
      cy.get('[class="contact-us-section"]')
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(500)
    }  


    NameValidation(testCase){
        cy.get(this.FirstName).clear().type(testCase.input)
        cy.wait(500);
        cy.get(this.LastName).clear().type(testCase.input);
        cy.wait(500);
    
    }

    

    ForNameValidation(){
        // cy.get('input[name="businessName"]').clear().type(testCase.input);
      cy.get(this.Email).type('valid@example.com');
      cy.get(this.Phone).type('01234567890');
      cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
      cy.wait(500);
      cy.get(this.Submit).click();

      
    }


    EmailValidation(testCase){
      cy.wait(500);
      cy.get(this.FirstName).type('Valid Company');
      cy.get(this.LastName).type('Valid Company');
      cy.get(this.Email).type(testCase.input);
      cy.get(this.Phone).type('01234567890');
      cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
      cy.wait(500);
      cy.get(this.Submit).click();

    }
  
}

export default HomeFormObjects;