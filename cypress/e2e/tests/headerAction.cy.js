
import HeaderObjects from "../objects/headerObjects.cy"

describe('Checking functionality of Header button of Nicdo Web', () => {
  it('should check all header button functionality correctly', () => {
     const header=new HeaderObjects();

    {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }
    
    
     {//actions
     header.clickPortfolio()
     header.clickAbout()
     header.clickUiUx()
     header.clickFrontEnd()
     header.clickBackEnd()
     header.clickFullStack()
     header.clickCMS()
     header.clickSEO() 
     header.clickOurServices()
     header.clickEcommerce()
     header.clickHealthcare()
     header.clickEducation()
     header.clickRealEstate()
     header.clickEntertainment()
     header.clickFinance()
     header.clickHospitality()
     header.clickNonprofits()
     header.clickTechnology()
     header.clickManufacturing()
     header.clickContactUs()
     header.clickJavaScript()
     header.clickReactJS()
     header.clickAngular()
     header.clickHTML()
     header.clickCSS()
     header.clickPython()
     header.clickPHP()
     header.clickNodejs()
     header.clickLaravel()
     header.clickNet()
     header.clickOracle()
     header.clickGCP()
     header.clickAzure()
     header.clickWordPress()
     header.clickMagento()
     header.clickFigma()
     header.clickAdobeXD()
     header.clickGoogleAnalytics()
     header.clickSEMrush()
     header.clickLanguage()
     header.clickHome
     header.clickContact()
     header.clickLogo()
     }
     
  })

 


})
