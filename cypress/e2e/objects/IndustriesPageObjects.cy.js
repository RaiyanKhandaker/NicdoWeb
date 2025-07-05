class IndustriesPageObjects {

    Ecommerce = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Healthcare = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Education = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    RealEstate = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Entertainment = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Finance = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Travel = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(9) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    NonProfit = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(10) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Technology = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(11) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    Manufacturing = "body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(12) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)"
    

    // body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)
    // body > div:nth-child(11) > section:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3) > button:nth-child(1)

    scrollEcommerce(){
     {
      cy.get("div[id='e-commerce-retail'] div:nth-child(1)")
        .scrollIntoView({ block: 'center' })
        .should('be.visible');
     }
     cy.wait(1000)
    }

    clickEcommerce(){
        cy.get(this.Ecommerce).click({force:true}).should('be.visible')
        cy.wait(1000)
    }


}


export default IndustriesPageObjects;