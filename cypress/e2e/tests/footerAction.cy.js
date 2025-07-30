import FooterObjects from "../objects/footerObjects.cy";

const footer = new FooterObjects();

describe('Checking functionality of Footer of Nicdo Web', () => {
  it('should check all Footer functionality correctly', () => {
    

    cy.visit('https://nicdoweb.com/');
    cy.wait(2000);

    const footerActions = [
      'Industries', 'Home', 'Technologies', 'Portfolio', 'AboutUs','UiUx', 'FrontEnd', 'BackEnd', 'Fullstack', 'CMS',
      'SEO', 'Privacy', 'Terms', 'Cookie', 'TellUsForm'
    ];

    // Loop through and perform each action
    footerActions.forEach(action => {
      footer.ScrollToFooter(); // Scroll before each action
      const method = `click${action}`;
      if (typeof footer[method] === 'function') {
        footer[method]();
      } else {
        cy.wait(2000); 
      }
    });
  });
});
