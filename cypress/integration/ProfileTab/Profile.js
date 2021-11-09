import ProfileTab from "../../support/pageObjects/ProfileTab";
import LoginPage from "../../support/pageObjects/LoginPage";

const profileTab = new ProfileTab();
const loginPage = new LoginPage();

Given("User should be logged in", (datatable) => {
  loginPage.navigateToUrl();
  cy.wait(10000);
  //loginPage.getSignInbutton().click();
  //cy.wait(10000);

  loginPage.getEmailInput().type("wahab8567@gmail.com");
  cy.wait(1000);
  loginPage.getEmailButton().click();
  loginPage.getPasswordlInput().type("14FollowUp!");
  cy.wait(1000);
  cy.get(".InputWithButton-btnLabel").click();
  cy.wait(1000);
});

// Test to verify profile page
When("User clicks on menu button", () => {
  profileTab.getMenubutton().click();
});

And("User clicks on my account option", () => {
  profileTab.getMyAcoount().click();
});
Then("User should be redirected to profile page", () => {
  profileTab.getProfilePage();
  cy.wait(10000);
});

//Test for empty full name
When("User remove first or second name or both", () => {
  cy.wait(1000);
  profileTab.getFirstNameEditIcon().click();
  profileTab.removeFirstNameForValidation().clear({ force: true });
});

And("User click on save button", () => {
  profileTab.getFullNameSaveButton().click({ force: true });
});
Then("User should be able to view  the validation error", () => {
  profileTab.getFullNameValidationtText().should("have.text", "Please fill in");
});

//Test for empty Email Address
When("User remove email address", () => {
  profileTab.getEmailAddressEditIcon().click();
  profileTab.removeEmailAddress().clear({ force: true });
});

And("User click on email save button", () => {
  profileTab.getEmailSaveButton().click({ force: true });
});
Then("User should be able to view  the email validation error", () => {
  profileTab
    .getEmailValidationtText()
    .should("have.text", "Please provide a valid email address");
});

//Test for empty phone number
When("User remove phone number", () => {
  profileTab.getPhoneNumberEditIcon().click();
  profileTab.removePhoneNumber().clear({ force: true });
});

And("User click on phone number save button", () => {
  profileTab.getPhoneNumberSaveButton().click({ force: true });
  cy.wait(10000);
});
Then("User should be able to view  the phone number validation error", () => {
  profileTab
    .getPhoneNumberValidationtText()
    .should("have.text", "Must be a valid phone number");
});

//Test for address
When("User remove address", () => {
  profileTab.getAddressEditIcon().click();
  profileTab.removeAddress().clear({ force: true });
  profileTab.removezipCode().clear({ force: true });
  profileTab.removeCity().clear({ force: true });
  profileTab.removeRegion().clear({ force: true });
});

And("User click on address save button", () => {
  profileTab.getAddressSaveButton().click({ force: true });
});
Then("User should be able to view  the address validation error", () => {
  profileTab
    .getAddressLineValidationtText()
    .should("have.text", "Please fill in");
  profileTab.getZipCodeValidationtText().should("have.text", "Please fill in");
  profileTab
    .getAddressCityValidationtText()
    .should("have.text", "Please fill in");
  profileTab
    .getAddressRegionValidationtText()
    .should("have.text", "Please fill in");
});

//Test for Identity verification description and Button
When("User click on Identity verification edit icon", () => {
  profileTab.getIdentityVerificationEditIcon().click();
});

And("User should view Identity verification description", () => {
  profileTab.getIdentityVerificationDescription().should("be.visible");
});
Then("User should be able to view Identity verification button", () => {
  profileTab.getIdentityVerificationbutton().should("be.visible");
});

//Test for account Header tabs
When("User is on the profile page", () => {
  profileTab.getAccountHeader().should("be.visible");
});

And("User click on profile,my documents and settings", () => {
  //profileTab.getIdentityVerificationDescription().should('be.visible')
  profileTab.getProfileTab().should("be.visible");
  profileTab.getDocumentTab().should("be.visible");
  profileTab.getSettingTab().should("be.visible");
});
Then("User should be able to the all tabs respective page", () => {
  profileTab.getProfileTab().click();
  profileTab.getProfilePage();
  profileTab.getDocumentTab().click();
  profileTab.getDocumentsPage();
  profileTab.getSettingTab().click();
  profileTab.getSettingPage();
});

//Test for  list of Nationalities country list
When("User click on nationality edit icon", () => {
  profileTab.getProfileTab().click();
  profileTab.getNationalityEditIcon().click();
});

And("User click on select icon for nationality tab", () => {
  cy.get(".DropdownInput-icon").last().click({ force: true });
});
Then("User should be able to view list of countries nationalities", () => {
  cy.get(".DropdownInput-select").should("be.visible");
});

//Test for profile progress ring
When("User is on profile page", () => {
  profileTab.getProfilePage();
});

And("User make mouseover on the progress ring", () => {
  profileTab.getStatusRingMouseover();
});
Then(
  "User should be able to view account the perfectage with description",
  () => {
    profileTab.getStatusRingToolTip();
    profileTab.getStatusRingToolTipHeading();
    profileTab.getStatusRingDescription();
    profileTab.getTextForProgressRing();
  }
);

//Test for Profile page header and footer
When("User is on profile page", () => {
  profileTab.getProfilePage();
});

And("User naviagte to profile header", () => {
  cy.get(".AppHeader-container").should("be.visible");
});
And("User naviagte to profile footer", () => {
  cy.get(".Footer").should("be.visible");
});
Then("User should be able to view header and footer", () => {
  cy.get(".AppHeader-container").should("be.visible");
  cy.get(".Footer").should("be.visible");
});
