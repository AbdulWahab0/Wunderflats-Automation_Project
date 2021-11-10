import ProfileTab from "../pageObjects/ProfileTab";

const profileTab = new ProfileTab();

//Commands for empty full name
Cypress.Commands.add("removeFullName", () => {
  cy.wait(1000);
  profileTab.getFirstNameEditIcon().click();
  profileTab.removeFirstNameForValidation().clear({ force: true });
});

Cypress.Commands.add("getFullNameSaveButton", () => {
  profileTab.getFullNameSaveButton().click({ force: true });
});
Cypress.Commands.add("getFullNameValidationtText", () => {
  profileTab.getFullNameValidationtText().should("have.text", "Please fill in");
});

//Test for profile progress ring
Cypress.Commands.add("getNationalityEditIcon", () => {
  profileTab.getProfileTab().click();
  profileTab.getNationalityEditIcon().click();
});
Cypress.Commands.add("getStatusRingMouseover", () => {
  profileTab.getStatusRingMouseover();
});
Cypress.Commands.add("getStatusRing", () => {
  profileTab.getStatusRingToolTip();
    profileTab.getStatusRingToolTipHeading();
    profileTab.getStatusRingDescription();
    profileTab.getTextForProgressRing();
});

//Commands for addrees
Cypress.Commands.add("removeAddress", () => {
  profileTab.getAddressEditIcon().click();
  profileTab.removeAddress().clear({ force: true });
  profileTab.removezipCode().clear({ force: true });
  profileTab.removeCity().clear({ force: true });
  profileTab.removeRegion().clear({ force: true });
});
Cypress.Commands.add("getAddressSaveButton", () => {
  profileTab.getAddressSaveButton().click({ force: true });
});
Cypress.Commands.add("getAddressLineValidationtText", () => {
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

// Commnads to validate all fields
Cypress.Commands.add("NaviagteToProfilePage", () => {
  profileTab.getProfilePage();
});
Cypress.Commands.add("NaviagteToAllFileds", () => {
  profileTab.getFullNameSection();
  profileTab.getEmailSection();
  profileTab.getPhoneNumberSection();
  profileTab.getAddressSection();
  profileTab.getIdVerificationSection();
  profileTab.getBirthDateSection();
  profileTab.getNationalitySection();
});

Cypress.Commands.add("getViewOfAllFields", () => {
  profileTab.getFullNameSection().should("be.visible");
  profileTab.getEmailSection().should("be.visible");;
  profileTab.getPhoneNumberSection().should("be.visible");;
  profileTab.getAddressSection().should("be.visible");;
  profileTab.getIdVerificationSection().should("be.visible");;
  profileTab.getBirthDateSection().should("be.visible");;
  profileTab.getNationalitySection().should("be.visible");;
});


//Commands for account Header tabs

Cypress.Commands.add("getAccountHeader", () => {
  profileTab.getAccountHeader().should("be.visible");
});
Cypress.Commands.add("getAccountTabs", () => {
  profileTab.getProfileTab().should("be.visible");
  profileTab.getDocumentTab().should("be.visible");
  profileTab.getSettingTab().should("be.visible");
});
Cypress.Commands.add("ValidateAllTabs", () => {
  profileTab.getProfileTab().click();
  profileTab.getProfilePage();
  profileTab.getDocumentTab().click();
  profileTab.getDocumentsPage();
  profileTab.getSettingTab().click();
  profileTab.getSettingPage();
});