import ProfileTab from "../../support/pageObjects/ProfileTab";

const profileTab = new ProfileTab();

// Login to App
Given("User should be logged in", () => {
  cy.loginToApp();
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
  cy.removeFullName();
});

And("User click on save button", () => {
  cy.getFullNameSaveButton();
});
Then("User should be able to view  the validation error", () => {
  cy.getFullNameValidationtText();
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
  cy.removeAddress();
});

And("User click on address save button", () => {
  cy.getAddressSaveButton();
});
Then("User should be able to view  the address validation error", () => {
  cy.getAddressLineValidationtText();
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
  cy.getAccountHeader();
});

And("User click on profile,my documents and settings", () => {
  cy.getAccountTabs();
});
Then("User should be able to view all tabs respective page", () => {
  cy.ValidateAllTabs();
});

//Test for  list of Nationalities country list
When("User click on nationality edit icon", () => {
  profileTab.getProfileTab().click();
  profileTab.getNationalityEditIcon().click();
});

And("User click on select icon for nationality tab", () => {
  profileTab.getDropDownIcon();
});
Then("User should be able to view list of countries nationalities", () => {
  profileTab.getNationalityList();
});

//Test for profile progress ring
When("User is on profile page", () => {
  profileTab.getProfilePage();
});

And("User make mouseover on the progress ring", () => {
  cy.getStatusRingMouseover();
});
Then(
  "User should be able to view account the perfectage with description",
  () => {
    cy.getStatusRing();
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

//Test for all fields
When("User is on profile page", () => {
  cy.NaviagteToProfilePage();
});

And("User naviagate first name", () => {
  cy.NaviagteToAllFileds();
});
Then("User should be able to view all fields", () => {
  cy.getViewOfAllFields();
});

//Test for Google address Api
When("User is on profile page for google", () => {
  cy.removeExistingAddress();
});

And("User type any address in address field", () => {
  cy.UpdateAddress();
});
Then("User should be able to view google api adress suggestion", () => {
  cy.ValidateGoogleApiAddress();
});

//Test to  validate list of  countries in the address filed
When("User to edit address", () => {
  profileTab.getAddressEditIcon();
});

And("User to select  the country", () => {
  cy.get("[data-testid=DropdownInput-country]").select("Germany");
});
Then("User should be able to view selected country", () => {
  cy.get("[data-testid=DropdownInput-country]")
    .select("Germany")
    .find(":selected")
    .contains("Germany");
});
