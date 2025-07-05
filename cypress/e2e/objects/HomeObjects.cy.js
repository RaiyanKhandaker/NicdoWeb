class HomeObejcts{
    UiUx = "//button[normalize-space()='UI/UX Design']"
    Frontend = "//button[normalize-space()='Frontend Development']"
    Backend = "//button[normalize-space()='Backend Development']"
    Fullstack = "//button[normalize-space()='Full Stack Development']"
    CMS = "//button[normalize-space()='CMS Development']"
    SEO = "//button[normalize-space()='SEO']"
    ReadMore = "//button[normalize-space()='Read More']"
    Home = "//a[contains(@class,'nav-link hover:text-gray-300')][normalize-space()='Home']"
    Bronze = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)"
    Silver = "div[class='cursor-pointer relative rounded-2xl shadow-lg p-8 pb-12 bg-cover bg-center border transition duration-300 flex flex-col border-primary border-2 scale-105'] a[class='mt-6 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-5 py-2 rounded-full']"
    Gold = "body > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > section:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > a:nth-child(1)"
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
      cy.xpath(this.UiUx).click({force:true}).should('be.visible')
      cy.wait(1000)
    }
    


    clickFrontend(){
        cy.xpath(this.Frontend).click({force:true}).should('be.visible')
        cy.wait(1000)
    }


    clickBackend(){
        cy.xpath(this.Backend).click({force:true}).should('be.visible')
        cy.wait(1000)
    }


    clickFullstack(){
        cy.xpath(this.Fullstack).click({force:true}).should('be.visible')
        cy.wait(1000)
    }


    clickCMS(){
        cy.xpath(this.CMS).click({force:true}).should('be.visible')
        cy.wait(1000)
    }


    clickSEO(){
        cy.xpath(this.SEO).click({force:true}).should('be.visible')
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


    scrollPackages(){
        
     {
      cy.get("h2:nth-child(1)")
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
    }

    clickBronze(){
        cy.get(this.Bronze).click({force:true}).should('be.visible')
        cy.wait(1000)
    }

    clickSilver(){
        cy.get(this.Silver).click({force:true}).should('be.visible')
        cy.wait(1000)
    }

    clickGold(){
        cy.get(this.Gold).click({force:true}).should('be.visible')
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