class HomeObejcts{
    UiUx = "//button[normalize-space()='UI/UX Design']"
    Frontend = "//button[normalize-space()='Frontend Development']"
    Backend = "//button[normalize-space()='Backend Development']"
    Fullstack = "//button[normalize-space()='Full Stack Development']"
    CMS = "//button[normalize-space()='CMS Development']"
    SEO = "//button[normalize-space()='SEO']"
    ReadMore = "//button[normalize-space()='Read More']"
    Home = "//a[contains(@class,'nav-link hover:text-gray-300')][normalize-space()='Home']"
    submit = "//button[normalize-space()='Submit']"
    

    

    scrollWebDevelopmentServices(){
        
     {
      cy.contains('h1', 'Web Development Services for Optimised Web Solutions')
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
    }


    clickUiUx(){
      cy.xpath(this.UiUx).click({force:true})
      cy.wait(1000)
    }
    


    clickFrontend(){
        cy.xpath(this.Frontend).click({force:true})
        cy.wait(1000)
    }


    clickBackend(){
        cy.xpath(this.Backend).click({force:true})
        cy.wait(1000)
    }


    clickFullstack(){
        cy.xpath(this.Fullstack).click({force:true})
        cy.wait(1000)
    }


    clickCMS(){
        cy.xpath(this.CMS).click({force:true})
        cy.wait(1000)
    }


    clickSEO(){
        cy.xpath(this.SEO).click({force:true})
        cy.wait(1000)
    }

    clickReadMore(){
        cy.xpath(this.ReadMore).click({force:true})
        cy.wait(1000)
    }

    clickHome(){
        cy.xpath(this.Home).click({force:true})
        cy.wait(1000)
    }



    scrollContactUs(){
        
     {
      cy.get('[class="contact-us-section"]')
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
    }


    clickContactUs(){
        cy.xpath(this.submit).click({force:true})
        cy.wait(1000)
    }

}

export default HomeObejcts