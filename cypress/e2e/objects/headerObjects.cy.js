class HeaderObjects{
    
    Portfolio= "//a[contains(text(),'Portfolio')]";
    About = "//a[contains(text(),'About Us')]";
    Contact = "//a[normalize-space()='Contact Us']";
    Services = "//div[contains(text(),'Services')]";
    Industries = "//div[contains(text(),'Industries')]";
    Technologies = "//div[contains(text(),'Technologies')]"
    Language = "//button[@class='flex items-center gap-2 border-1 border-transparent text-white hover:border-white rounded-lg px-2 md:px-3 py-1.5 cursor-pointer']"
    Home = "//a[contains(@class,'nav-link hover:text-gray-300')][normalize-space()='Home']"
    Logo = "//img[contains(@class,'sm:h-[50px] sm:w-[80px] md:w-[100px] md:h-[60px] lg:w-[140px] xl:w-[160px] xl:h-[70px] 2xl:w-[180px] 2xl:h-[80px]')]"


    clickPortfolio(){//click portfolio
     cy.xpath(this.Portfolio).click()
     cy.wait(2000)
    }
    


    clickAbout(){ //click About us
     cy.xpath(this.About).click()
     cy.wait(2000)
    }


    clickContact(){//click Contact us
     cy.xpath(this.Contact).click()
     cy.wait(2000)
    }



    clickUiUx(){//click UI/UX button Design from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains('UI/UX Design').click()
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'ui-ux')
     cy.wait(2000)
    }



    clickFrontEnd(){//click Frontend Development button from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains('Frontend Development').click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'frontend')
     cy.wait(2000)
    }




    clickBackEnd(){//click Backend Development button from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains('Backend Development').click()
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'backend')
     cy.wait(2000)
    }




    clickFullStack(){//click Fullstack Development button from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains('Full Stack Development').click()
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'fullstack')
     cy.wait(2000)
    }




    clickCMS(){//click CMS Development button from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains('CMS Development').click()
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'cms')
     cy.wait(2000)
    }




    clickSEO(){//click SEO button from header Services button
     cy.xpath(this.Services).click({ force: true })
     cy.wait(2000)
     cy.contains("SEO").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'seo')
     cy.wait(2000)
    }



    clickEcommerce(){//click E-Commerce button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("E-Commerce").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'e-commerce')
     cy.wait(2000)
    }


    clickHealthcare(){//click Healthcare button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Healthcare").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'healthcare')
     cy.wait(2000)
    }


    clickEducation(){//click Education button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Education").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'education')
     cy.wait(2000)
    }


    clickRealEstate(){//click Real Estate button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Real Estate").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'real-estate')
     cy.wait(2000)
    }


    clickEntertainment(){//click Entertainment button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Entertainment").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'entertainment')
     cy.wait(2000)
    }


    clickFinance(){//click Finance button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Finance").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'finance')
     cy.wait(2000)
    }


    clickHospitality(){//click Hospitality button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Hospitality ").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'hospitality')
     cy.wait(2000)
    }


    clickNonprofits(){//click Nonprofits button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Nonprofits").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'nonprofits')
     cy.wait(2000)
    }


    clickTechnology(){//click Technology button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Technology").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'technology')
     cy.wait(2000)
    }



    clickManufacturing(){//click Manufacturing button from header Industries button
     cy.xpath(this.Industries).click({force: true})
     cy.wait(2000)
     cy.contains("Manufacturing").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'manufacturing')
     cy.wait(2000)
    }



    //Techonologies - Frontend
    clickJavaScript(){//click JavaScript button from header Technologies button
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("JavaScript").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'javascript')
     cy.wait(2000)
    }



    clickReactJS(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("ReactJS").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'react-js')
     cy.wait(2000)
    }


    clickAngular(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Angular").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'angular')
     cy.wait(2000)
    }



    clickHTML(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("HTML").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'html')
     cy.wait(2000)
    }



    clickCSS(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("CSS").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'css')
     cy.wait(2000)
    }



    //Techonologies - Backend
    clickPython(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Python").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'python')
     cy.wait(2000)
    }



    clickPHP(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("PHP").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'php')
     cy.wait(2000)
    }



    clickNodejs(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Node.js").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'node-js')
     cy.wait(2000)
    }




    clickLaravel(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Laravel").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'laravel')
     cy.wait(2000)
    }



    clickNet(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains(".NET").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'net')
     cy.wait(2000)
    }



    ////Techonologies - Platforms
    clickOracle(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Oracle").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'oracle')
     cy.wait(2000)
    }


    clickGCP(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("GCP").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'gcp')
     cy.wait(2000)
    }



    clickAzure(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Azure").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'azure')
     cy.wait(2000)
    }



    ////Techonologies - CMS

    clickWordPress(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("WordPress").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'wordpress')
     cy.wait(2000)
    }

    
    clickMagento(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Magento").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'magento')
     cy.wait(2000)
    }



    ////Techonologies - Tools
    clickFigma(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Figma").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'figma')
     cy.wait(2000)
    }



    clickAdobeXD(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Adobe XD").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'adobe-xd')
     cy.wait(2000)
    }
    


    clickGoogleAnalytics(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("Google Analytics").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'google-analytics')
     cy.wait(2000)
    }



    clickSEMrush(){
     cy.xpath(this.Technologies).click({force: true})
     cy.wait(2000)
     cy.contains("SEMrush").click({ force: true })
     cy.wait(2000)
     cy.url({ decode: true }).should('contain', 'semrush')
     cy.wait(2000)
    }


    clickLanguage(){
     cy.xpath(this.Language).click({ force: true})
     cy.wait(2000)
     cy.contains("English").click({ force: true })
     cy.wait(2000)
     cy.xpath(this.Language).click({ force: true})
     cy.wait(2000)
     cy.contains("Spanish").click({ force: true })
     cy.wait(2000)
     cy.xpath(this.Language).click({ force: true})
     cy.wait(2000)
     cy.contains("Arabic").click({ force: true })
     cy.wait(2000)
     cy.xpath(this.Language).click({ force: true})
     cy.wait(2000)
     cy.contains("French").click({ force: true })
    }


    clickHome(){
     cy.xpath(this.Home).click({ force: true})
     cy.wait(2000)
    }



    clickLogo(){
     cy.xpath(this.Logo).click({ force: true})
     cy.wait(2000)
    }


 
}

export default HeaderObjects;