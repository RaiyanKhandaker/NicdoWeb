class ContactUsPageObject{

    //Locators of contact us page
    Contact = "//a[normalize-space()='Contact Us']";
    FirstName = "#firstName"
    Lastname = "//input[@id='lastName']"
    Email = "#email"
    Phone = "#phone"
    Message = "#message"
    Submit = "button[type='submit']"



    //click Contact us from Header
    clickContact(){//click Contact us
    //  cy.xpath(this.Contact)
    //    .as('btn')  
    //  cy.get('@btn').click({force: true})
     cy.contains("Contact Us")
       .should('be.visible')
       .click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'contact')
     cy.wait(2000)
    }



    //scroll to contact us section
    scrollContact(){
    {
     cy.contains("Get in Touch with NicdoWeb")
       .scrollIntoView({ block: 'center' })
       .should('be.visible')
     }

     cy.wait(1000)
    
    }





    //first name validation
    FirstNameValidation(testCase){
        cy.get(this.FirstName).clear().type(testCase.input)
        cy.wait(1000);
    }



    //First name type for last name validation
    TypeFirstName(){
        cy.get(this.FirstName).type("John")
        cy.wait(1000)
    }



    //Last name validation
    LastNameValidation(testCase){
        cy.xpath(this.Lastname).clear().type(testCase.input);
        cy.wait(1000)
    }



    //submit form for name validation
    NameSubmitForm(){ 
        cy.wait(1000);
        cy.get(this.Email).type('valid@example.com')
        cy.get(this.Phone).type('01234567890');
        cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
        cy.wait(1000)
        cy.get(this.Submit).click()
        cy.wait(1000);
    }




    //empty form validation
    EmptySubmitForm(){
        cy.get(this.Submit).click()
        cy.wait(1000);
        cy.get(this.FirstName).then(($input) => {
        expect($input[0].validationMessage).to.include("Please fill out this field");
        });
        
        cy.wait(1000);

    }


    //type name for email validation
    TypeName(){
       cy.get(this.FirstName).type("Valid Company")
       cy.wait(1000)
    }




    //submit form for email validation
    EmailFormSubmit(){
        cy.get(this.Phone).type('01234567890');
        cy.get(this.Message).type('sdfghjkjhgfdsfghhgfdfghkjhghjk');
        cy.wait(1000)
        cy.get(this.Submit).click()
        cy.wait(1000);
    }



    //email validation
    EmailValidation(testCase){
        cy.get(this.Email).clear().type(testCase.input);
        cy.wait(1000)
    }
}

export default ContactUsPageObject;