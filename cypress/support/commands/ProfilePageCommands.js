import LoginPage from "../pageObjects/LoginPage";

const loginPage = new LoginPage();
Cypress.Commands.add("login", (email,password) => {
   
    loginPage.getEmailInput(email);
    loginPage.getPasswordlInput(password);
  });