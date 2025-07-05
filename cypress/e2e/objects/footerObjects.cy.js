class FooterObjects{

    Home = "//a[contains(@class,'flex items-center hover:text-yellow-400 leading-8')][normalize-space()='Home']"
    Industries = "//a[normalize-space()='Industries']"
    Technologies = "//a[normalize-space()='Technologies']"
    Portfolio = "//a[contains(text(),'Portfolio')]"
    AboutUs = "//a[contains(text(),'About Us')]"
    UiUx = "//a[normalize-space()='UI/UX Design']"
    FrontEnd = "//a[normalize-space()='Frontend Development']"
    BackEnd = "//a[normalize-space()='Backend Development']"
    FullStack = "//a[normalize-space()='Full Stack Development']"
    CMS = "//a[normalize-space()='CMS Development']"
    SEO = "//a[normalize-space()='SEO']"
    Privacy = "//a[normalize-space()='Privacy Policy']"
    Terms = "//a[normalize-space()='Terms & Conditions']"
    Cookie = "//a[normalize-space()='Cookie Policy']"
    TellUsForm = "//button[@class='mt-4 bg-white flex justify-center items-center text-blue-900 font-semibold px-5 py-2 rounded-full shadow-lg']"




    ScrollToFooter(){
        cy.scrollTo('bottom')
        cy.wait(1000)
    }


    clickHome(){
        cy.xpath(this.Home).click()
        cy.wait(1000)
    }

    clickIndustries(){
        cy.xpath(this.Industries).click()
        cy.wait(1000)
    }

    clickTechnologies(){
        cy.xpath(this.Technologies).click()
        cy.wait(1000)
    }

    clickPortfolio(){
        cy.xpath(this.Portfolio).click()
        cy.wait(1000)
    }

    clickAboutUs(){
        cy.xpath(this.AboutUs).click()
        cy.wait(1000)
    }


    clickUiUx(){
        cy.xpath(this.UiUx).click()
        cy.wait(1000)
    }


    clickFrontEnd(){
        cy.xpath(this.FrontEnd).click({multiple: true})
        cy.wait(1000)
        
    }

    clickBackEnd(){
        cy.xpath(this.BackEnd).click({multiple: true})
        cy.wait(1000)
        
    }


    clickFullstack(){
        cy.xpath(this.FullStack).click({multiple: true})
        cy.wait(1000)
    }


    clickCMS(){
        cy.xpath(this.CMS).click({multiple: true})
        cy.wait(1000)
    }


    clickSEO(){
        cy.xpath(this.SEO).click({multiple: true})
        cy.wait(1000)
    }


    clickPrivacy(){
        cy.xpath(this.Privacy).click({multiple: true})
        cy.wait(1000)
    }

    clickTerms(){
        cy.xpath(this.Terms).click({multiple: true})
        cy.wait(1000)
    }


    clickCookie(){
        cy.xpath(this.Cookie).click({multiple: true})
        cy.wait(1000)
    }


    clickTellUsForm(){
        cy.xpath(this.TellUsForm).click({multiple: true})
        cy.wait(1000)
    }



}

export default FooterObjects;