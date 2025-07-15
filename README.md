## NicdoWeb Cypress E2E Test Suite

This repository contains end-to-end (E2E) tests for the NicdoWeb website ([https://nicdoweb.com/]), using the Cypress testing framework and the Page Object Model (POM) design pattern.

---

### Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running Tests](#running-tests)
6. [Project Structure](#project-structure)
7. [Page Object Model](#page-object-model)
8. [Writing New Tests](#writing-new-tests)
9. [Configuration](#configuration)
10. [Supporting Resources](#supporting-resources)

---

## Overview

This test suite validates key functionalities across various pages of the NicdoWeb site, including:

* Homepage interactions and form submissions
* Contact Us page form validations
* Industry and Service page navigations
* Footer and header link behavior

The tests follow the Page Object Model to keep selectors and page-specific actions organized and reusable.

## Features

* **Cross-browser**: Run tests in Chrome, Firefox, and other browsers supported by Cypress.
* **POM-based**: Centralized page objects for maintainability.
* **Custom commands**: Extend Cypress functionality.
* **Fixtures**: Static test data for consistent results.

## Prerequisites

* [Node.js](https://nodejs.org/) v14 or above
* [npm](https://www.npmjs.com/) v6 or above

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RaiyanKhandaker/NicdoWeb.git
   cd NicdoWeb
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

Select the spec file to run interactively.

### Run All Tests in Headless Mode

```bash
npx cypress run
```

By default, tests run in Electron. To specify Chrome:

```bash
npx cypress run --browser chrome
```

## Project Structure

```
NicdoWeb/
├── cypress.config.js       # Cypress configuration settings
├── cypress/
│   ├── e2e/
│   │   ├── objects/        # Page Object Model classes (.cy.js)
│   │   └── tests/          # E2E test scripts (.cy.js)
│   ├── fixtures/           # Test data (JSON)
│   └── support/            # Custom commands and global setup
├── node_modules/           # Installed dependencies
├── package.json            # Project metadata & scripts
└── package-lock.json       # Exact dependency versions
```

## Page Object Model

All page-specific selectors and actions are encapsulated in the `cypress/e2e/objects` directory. Example:

```js
// cypress/e2e/objects/allOtherPageObjects.cy.js
export default class allOtherPageObjects{

    //locators for all other page objects
    Technologies = "//div[contains(text(),'Technologies')]"
    Portfolio= "//a[contains(text(),'Portfolio')]";
    About = "//a[contains(text(),'About Us')]";
    GetStartedButton = "//button[normalize-space()='Get Started']"
    Submit = "//button[@type='submit']"

    //click Technologies
    clickTechnologies(){
        cy.xpath(this.Technologies).click({force:true})
        cy.wait(1000)
    }

    //click Oracle
    clickOracle(){
     cy.contains("Oracle").click({ force: true })
     cy.wait(1000)
     cy.url({ decode: true }).should('contain', 'oracle')
     cy.wait(1000)
    }
}

// export default allOtherPageObjects
```

## Writing New Tests

1. Create a new page object in `cypress/e2e/objects` for the target page.
2. Write corresponding test spec in `cypress/e2e/tests`, importing your page object.
3. Follow naming convention: `<PageName>PageObject.cy.js` and `<PageName>Actions.cy.js`.

Example:

```bash
cypress/e2e/objects/AboutPageObjects.cy.js
cypress/e2e/tests/AboutPageActions.cy.js
```

## Configuration

All settings are in `cypress.config.js`:

* Viewport size: 1920×1080
* Support file: `cypress/support/e2e.js`


## Supporting Resources

* [Cypress Documentation](https://docs.cypress.io)
* [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
* [Page Object Model](https://martinfowler.com/bliki/PageObject.html)
