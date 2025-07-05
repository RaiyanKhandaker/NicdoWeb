class ServicePageObjects{
    UiUx = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Frontend = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Backend = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Fullstack = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    CMS = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    SEO = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    GetQuote = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Home = "//a[contains(@class,'nav-link hover:text-gray-300')][normalize-space()='Home']"


    clickUiUx(){
     cy.get(this.UiUx).click({ force: true})
     cy.wait(1000)
    }


    clickFrontend(){
     cy.get(this.Frontend).click({ force: true})
     cy.wait(1000)
    }


    clickBackend(){
     cy.get(this.Backend).click({ force: true})
     cy.wait(1000)
    }


    clickFullstack(){
     cy.get(this.Fullstack).click({ force: true})
     cy.wait(1000)
    }


    clickCMS(){
     cy.get(this.CMS).click({ force: true})
     cy.wait(1000)
    }


    clickSEO(){
     cy.get(this.SEO).click({ force: true})
     cy.wait(1000)
    }


    clickGetQuote(){
     cy.get(this.GetQuote).click({ force: true})
     cy.wait(1000)
    }
    
    
    clickHome(){
     cy.xpath(this.Home).click({ force: true})
     cy.wait(1000)
    }

}