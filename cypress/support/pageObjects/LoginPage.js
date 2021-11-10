class LoginPage {
  navigateToUrl() {
    return cy.visit(
      "https://en-hiring.wunderflats.xyz/en/login?redirect=%2Fen"
    );
  }

  getSignInbutton() {
    return cy.get(".AppHeader-SignInLink");
  }
  getEmailButton() {
    return cy.get(".InputWithButton-button"); 
  }
  getEmailInput() {
    return cy.get('.InputWithButton-inputContainer');
  }
  getPasswordlInput() {
    return cy.get(
      "[data-testid=password-form] > .InputWithButton > .InputWithButton-inputContainer > .InputWithButton-input"
    );
  }
  getPasswordButton(){
    return cy.get(".InputWithButton-btnLabel");
  }
  getMyAcoount() {
    return cy.get(":nth-child(1) > [data-testid=AppHeader-Link-account]");
  }
}

export default LoginPage;
