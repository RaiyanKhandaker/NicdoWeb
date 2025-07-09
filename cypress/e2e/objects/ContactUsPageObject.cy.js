class ContactUsPageObject{
    Contact = "//a[normalize-space()='Contact Us']";
    FirstName = "#firstName"
    Lastname = "//input[@id='lastName']"
    Email = "#email"
    Phone = "#phone"
    Message = "#message"
    Submit = "button[type='submit']"


    clickContact(){//click Contact us
     cy.xpath(this.Contact).click({ multiple: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'contact')
     cy.wait(1000)
    }


    scrollContact(){
    {
     cy.contains("Get in Touch with NicdoWeb")
       .scrollIntoView({ block: 'center' })
       .should('be.visible')
     }

     cy.wait(1000)
    
    }


    FirstNameValidation(testCase){
        cy.get(this.FirstName).clear().type(testCase.input)
        cy.wait(1000);
        // cy.get(this.LastName).clear().type(testCase.input);
        // cy.wait(500);
    }


    TypeFirstName(){
        cy.get(this.FirstName).type("John")
        cy.wait(1000)
    }

    LastNameValidation(testCase){
        
        // cy.get(this.LastName).type(testCase.input);
        cy.xpath(this.Lastname).clear().type(testCase.input);
        cy.wait(1000)
    }


    SubmitForm(){
        
        cy.wait(1000);
        cy.get(this.Email).type('valid@example.com')
        cy.get(this.Phone).type('01234567890');
        cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
        cy.wait(1000)
        cy.get(this.Submit).click()
        cy.wait(1000);
    }


    EmptySubmitForm(){
        
        // cy.wait(500);
        // cy.get(this.Email).type('valid@example.com')
        // cy.get(this.Phone).type('01234567890');
        // cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
        cy.get(this.Submit).click()
        cy.wait(1000);
        cy.get('input[name="firstName"]').then(($input) => {
        expect($input[0].validationMessage).to.include("Please fill out this field");
});
    }
}

export default ContactUsPageObject;