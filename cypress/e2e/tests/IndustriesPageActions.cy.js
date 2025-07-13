import IndustriesPageObjects from "../objects/IndustriesPageObjects.cy"


describe('Checking functionality of Industries of Nicdo Web', () => {
  it('should check all industries page functionality correctly', () => {
     const industries=new IndustriesPageObjects()

    {//visit website
     cy.visit('https://nicdoweb.com/')
     cy.wait(2000)
    }

   //  industries.clickIndustries()
   //  industries.scrollEcommerce()
   //  industries.clickEcommerce()
   //  industries.clickHealthcare()
   //  industries.clickEducation()
   //  industries.clickRealEstate() 
   //  industries.clickEntertainment()
   //  industries.clickFinance()
   //  industries.clickTravel()
   //  industries.clickNonProfit()
   //  industries.clickTechnology()
   //  industries.clickManufacturing()
 })
})