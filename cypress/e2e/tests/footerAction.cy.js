import FooterObjects from "../objects/footerObjects.cy"

describe('Checking functionality of Footer of Nicdo Web', () => {
  it('should check all Footer functionality correctly', () => {

    const footer= new FooterObjects()

    
    {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }

    
    // footer.ScrollToFooter()
    // footer.clickIndustries()
    // footer.ScrollToFooter()
    // footer.clickHome()
    // footer.ScrollToFooter()
    // footer.clickTechnologies()
    // footer.ScrollToFooter()
    // footer.clickPortfolio()
    // footer.ScrollToFooter()
    // footer.clickAboutUs()
    // footer.ScrollToFooter()
    // footer.clickUiUx()
    // footer.ScrollToFooter()
    // footer.clickFrontEnd()
    // footer.ScrollToFooter()
    // footer.clickBackEnd()
    // footer.ScrollToFooter()
    // footer.clickFullstack()
    // footer.clickCMS()
    // footer.ScrollToFooter()
    // footer.clickSEO()
    // footer.ScrollToFooter()
    // footer.clickPrivacy()
    // footer.ScrollToFooter()
    // footer.clickTerms()
    // footer.ScrollToFooter()
    // footer.clickCookie()
    // footer.clickTellUsForm()

    

    // cy.xpath("//button[@class='home-service-details-button']").click({force:true})
    // cy.xpath("//button[@class='home-service-button home-service-button-active']").click({force:true})
    // cy.xpath("")

    
  })
})