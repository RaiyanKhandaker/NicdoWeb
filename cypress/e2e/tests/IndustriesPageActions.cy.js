import IndustriesPageObjects from "../objects/IndustriesPageObjects.cy"


describe('Checking functionality of Industries of Nicdo Web', () => {
  it('should check all industries page functionality correctly', () => {
     const home=new IndustriesPageObjects()

    {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }
 })
})