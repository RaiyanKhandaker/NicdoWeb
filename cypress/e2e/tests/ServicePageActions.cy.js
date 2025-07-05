import ServicePageObjects from "../objects/ServicePageObjects.cy"

describe('Checking functionality of Service of Nicdo Web', () => {
  it('should check all button in Service functionality correctly', () => {
     const service=new ServicePageObjects()

    {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }

    service.clickServices()
    service.clickUiUx()
    service.clickServices()
    service.scrollFrontend()
    service.clickFrontend()
    service.clickServices()
    service.clickBackend()
    service.clickServices()
    service.clickFullstack()
    service.clickServices()
    service.clickCMS()
    service.clickServices()
    service.clickSEO()
    service.clickServices()
    service.clickGetQuote()
    
  })
})