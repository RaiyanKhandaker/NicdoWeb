class FooterFormObjects {
    //footer locators
    TellUsForm = "//button[normalize-space()='Tell Us About Your Project']"
    FirstName = "input[placeholder='First Name*']"
    Lastname = "input[placeholder='Last Name']"
    Email = '[placeholder="Email*"]'
    Send = "button[class='px-10 py-3 bg-gradient-to-r from-primary to-secondaryPrimary text-white rounded-full']"





    //scroll to footer
    ScrollToFooter(){
        cy.scrollTo('bottom')
        cy.wait(1000)
    }



    //click footer form
    ClickTellUsForm(){
        cy.xpath(this.TellUsForm).click({multiple: true})
       
        {
        cy.contains("Tell Us About Your Project")
          .should('be.visible')
        }

        cy.wait(1000)
    }



    //name validation test cases
    NameValidation(testCase){
        cy.get(this.FirstName).clear().type(testCase.input)
        cy.wait(1000);
        cy.get(this.Lastname).clear().type(testCase.input);
        cy.wait(1000);
    
    }



    //type name for email validation
    TypeName(){
       cy.get(this.FirstName).type("Valid Company")
       cy.get(this.Lastname).type("Valid Company")
    }




    //email validation test cases
    EmailValidation(testCase){
        cy.get(this.Email).eq(1).clear().type(testCase.input)
        cy.wait(1000)
    }


    


    //submit form
    SubmitForm(){
        // First, get the iframe
       cy.get('iframe').then(($iframe) => {
       const $body = $iframe.contents().find('body');
 
        // Now wrap the body to interact with it
       {cy.wrap($body)
         .should('be.visible')
         .clear() 
         .type('This is a message typed into TinyMCE');
       }
     });
        cy.get(this.Send).click()
        cy.wait(1000)
    }
}

export default FooterFormObjects;