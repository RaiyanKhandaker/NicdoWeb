import allOtherPageObjects from "../objects/allOtherPageObjects.cy"

describe('Checking functionality of Header button of Nicdo Web', () => {
  it('should check all header button functionality correctly', () => {
     const allOtherPage =new allOtherPageObjects()

     {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }

    allOtherPage.clickTechnologies()
    allOtherPage.clickOracle()
    allOtherPage.clickPortfolio()
    allOtherPage.scrollPortfolio()
    allOtherPage.clickAbout()
    allOtherPage.scrollAboutUs()
    allOtherPage.clickGetStartedButton()
    allOtherPage.scrollContact()
    allOtherPage.clickSubmit()
    
  })
})