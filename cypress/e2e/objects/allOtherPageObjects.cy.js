class allOtherPageObjects{

    Technologies = "//div[contains(text(),'Technologies')]"
    Portfolio= "//a[contains(text(),'Portfolio')]";
    About = "//a[contains(text(),'About Us')]";
    GetStartedButton = "//button[normalize-space()='Get Started']"
    Submit = "//button[@type='submit']"

    //The success stories we built

    clickTechnologies(){
        cy.xpath(this.Technologies).click({force:true})
        cy.wait(1000)
    }


    clickOracle(){
     cy.contains("Oracle").click({ force: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'oracle')
     cy.wait(1000)
    }

    clickPortfolio(){//click portfolio
     cy.xpath(this.Portfolio).click()
     cy.wait(1000)
    }
    



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


    clickAbout(){ //click About us
     cy.xpath(this.About).click()
     cy.wait(1000)
    }


    ////button[normalize-space()='Get Started']
    //  font-Poppins  text-4xl font-bold text-purple-700 mb-6 
    scrollAboutUs(){
    {
     cy.contains("Who We Are?")
       .scrollIntoView({ block: 'center' })
       .should('be.visible');
     }

     cy.wait(1000)
    
    }


    clickGetStartedButton(){
     cy.xpath(this.GetStartedButton).click({ force: true })
     cy.wait(1000)
    }

    

    scrollContact(){
    {
     cy.contains("Get in Touch with NicdoWeb\
      ")
       .scrollIntoView({ block: 'center' })
       .should('be.visible');
     }

     cy.wait(1000)
    
    }


    clickSubmit(){
        cy.xpath(this.Submit).click({ force: true })
        cy.wait(1000)
    }



}

export default allOtherPageObjects