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
    return  cy.get('[data-testid=email-form] > .InputWithButton')
    .find(".InputWithButton-button"); 
  }
  getEmailInput() {
    return cy.get('[data-testid=email-form] > .InputWithButton')
    .find('.InputWithButton-inputContainer');
  }
  getPasswordlInput() {
    return cy.get("[data-testid=password-form] > .InputWithButton")
    .find('.InputWithButton-inputContainer');
  }
  getPasswordButton(){
    return cy.get("[data-testid=password-form] > .InputWithButton")
    .find('.InputWithButton-button')
  }
  getMyAcoount() {
    return cy.get(":nth-child(1) > [data-testid=AppHeader-Link-account]");
  }
}

export default LoginPage;
