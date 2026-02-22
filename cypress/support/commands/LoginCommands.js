import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();

Cypress.Commands.add("loginToApp", () => {
    loginPage.navigateToUrl();
    loginPage.getEmailInput().type("wahab8567@gmail.com");
    cy.wait(10000);
    loginPage.getEmailButton().click();
    loginPage.getPasswordlInput().type("12098765ollowUp!");
    cy.wait(1000);
    loginPage.getPasswordButton().click();
    cy.wait(1000);
});
