class allOtherPageObjects{

    //locators for all other page objects
    Technologies = "//div[contains(text(),'Technologies')]"
    Portfolio= "//a[contains(text(),'Portfolio')]";
    About = "//a[contains(text(),'About Us')]";
    GetStartedButton = "//button[normalize-space()='Get Started']"
    Submit = "//button[@type='submit']"



    //click Technologies
    clickTechnologies(){
        cy.xpath(this.Technologies).click({force:true})
        cy.wait(1000)
    }



    //click Oracle
    clickOracle(){
     cy.contains("Oracle").click({ force: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'oracle')
     cy.wait(1000)
    }



    //click portfolio
    clickPortfolio(){
     cy.xpath(this.Portfolio).click()
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'portfolio')
     cy.wait(1000)
    }
    




    //Scroll to portfolio
    scrollPortfolio(){
     {
      cy.contains("The success stories we built")
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
     cy.scrollTo('bottom')
     cy.wait(1000)
    }



    //click About us
    clickAbout(){ 
     cy.xpath(this.About).click()
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'about')
     cy.wait(1000)
    }


    //Scroll to About us
    scrollAboutUs(){
    {
     cy.contains("Who We Are?")
       .scrollIntoView({ block: 'center' })
       .should('be.visible');
     }

     cy.wait(1000)
    
    }



    //click Get Started
    clickGetStartedButton(){
     cy.xpath(this.GetStartedButton).click({ force: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'contact')
     cy.wait(1000)
    }

    

    //scroll to contact us
    scrollContact(){
    {
     cy.contains("Get in Touch with NicdoWeb")
       .scrollIntoView({ block: 'center' })
       .should('be.visible')
     }

     cy.wait(1000)
    
    }



    //click Submit
    clickSubmit(){
        cy.xpath(this.Submit).click({ force: true })
        cy.wait(1000)
    }



}

export default allOtherPageObjects