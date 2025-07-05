class ServicePageObjects{
    Services = "//div[contains(text(),'Services')]";
    UiUx = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Frontend = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Backend = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Fullstack = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    CMS = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    SEO = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    GetQuote = "button[class='mt-6 bg-purple-600 px-4 py-2 md:px-6 md:py-3 text-lg rounded-lg shadow-md']"
    


    clickServices(){
     cy.xpath(this.Services).click({ force: true })
     cy.wait(1000)
     cy.contains("Check Our Services").click({ force: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'our-services')
     cy.wait(1000)
    }


    clickUiUx(){
     cy.get(this.UiUx).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'ui-ux')
     cy.wait(1000)
    }


    scrollFrontend(){
        
     {
      cy.get("div[class='font-Poppins container content_wrapper'] div:nth-child(2) div:nth-child(1)")
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
    }


    clickFrontend(){
     cy.get(this.Frontend).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'frontend')
     cy.wait(1000)
    }


    clickBackend(){
     cy.get(this.Backend).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'backend')
     cy.wait(1000)
    }


    clickFullstack(){
     cy.get(this.Fullstack).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'fullstack')
     cy.wait(1000)
    }


    clickCMS(){
     cy.get(this.CMS).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'cms')
     cy.wait(1000)
    }


    clickSEO(){
     cy.get(this.SEO).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'seo')
     cy.wait(1000)
    }


    clickGetQuote(){
     cy.get(this.GetQuote).click({ force: true})
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'contact')
     cy.wait(1000)
    }
    
    
    

}

export default ServicePageObjects;