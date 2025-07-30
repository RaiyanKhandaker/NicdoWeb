import HomeObejcts from "../objects/HomeObjects.cy";

const home = new HomeObejcts()

describe('Checking functionality of Header button of Nicdo Web', () => {


  it('should check all header button functionality correctly', () => {
  
  const url  = 'https://nicdoweb.com/';

  cy.visit(url);
  cy.wait(2000);


  const services = ['UiUx', 'Frontend', 'Backend', 'Fullstack', 'CMS', 'SEO'];

  // Quick pass–through: just click each tab once
  services.forEach(tab => {
    home.scrollWebDevelopmentServices();
    home[`click${tab}`]();
  });

  // “Read More” pass: scroll → click tab → click Read More → back home
  services.forEach(tab => {
    home.scrollWebDevelopmentServices();
    home[`click${tab}`]();
    home.clickReadMore();
    home.clickHome();
  });

  // // 5) Uncomment to test Packages section
  // home.scrollWebDevelopmentServices();
  // home.scrollPackages();
  // ['Basic', 'Standard', 'Premium'].forEach(plan => {
  //   home[`click${plan}`]();
  //   home.scrollPackages();
  // });
  // home.clickHome();


  home.scrollContactUs();
  home.clickContactUs();
});

})