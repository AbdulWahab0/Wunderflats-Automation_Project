class ProfileTab {
  getProfilePage() {
    return cy
      .url()
      .should(
        "include",
        "https://en-hiring.wunderflats.xyz/en/account/profile"
      );
  }
  /*   getEmailButton(){
    cy.get(".InputWithButton-button");
  } */
  getMenubutton() {
    return cy.get(".AppHeaderUserMenu-ToggleButton-desktop");
  }
  getMyAcoount() {
    return cy.get(":nth-child(1) > [data-testid=AppHeader-Link-account]");
  }
  getFirstNameEditIcon() {
    return cy.get(
      "[data-testid=FullNameSection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }
  removeFirstNameForValidation() {
    return cy.get('input[name="firstName"]').clear();
  }
  removeFirstName() {
    return cy.get('input[name="firstName"]').clear();
  }
  removeLastName() {
    return cy.get('input[name="lastName"]').clear();
  }
  getFullNameSaveButton() {
    return cy.get(".FullNameForm > .SubmitButton-container > .SubmitButton");
  }
  getFullNameValidationtText() {
    return cy.get(
      ".FullNameForm-FieldsContainer-firstName > .InputWrapper > .InputWrapper-error"
    );
  }
  updateFirstName() {
    return cy
      .get(
        ".FullNameForm-FieldsContainer-firstName > .InputWrapper > .InputWrapper-children > .InputText > .InputText-input"
      )
      .type("Ameer");
  }
  updateLastName() {
    return cy
      .get(
        ".FullNameForm-FieldsContainer-lastName > .InputWrapper > .InputWrapper-children > .InputText > .InputText-input"
      )
      .type("Hamza");
  }
  // Test for Email Address
  getEmailAddressEditIcon() {
    return cy.get(
      "[data-testid=EmailSection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }
  removeEmailAddress() {
    return cy.get('input[name="email"]');
  }
  getEmailSaveButton() {
    return cy.get(".EmailForm > .SubmitButton-container > .SubmitButton");
  }
  getEmailValidationtText() {
    return cy.get(
      ".EmailForm-FieldsContainer-email > .InputWrapper > .InputWrapper-error"
    );
  }
  // Validation for phone number
  getPhoneNumberEditIcon() {
    return cy.get(
      "[data-testid=PhoneNumberSection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }
  removePhoneNumber() {
    return cy.get(".PhoneNumberInput-phoneInput");
  }
  getPhoneNumberSaveButton() {
    return cy.get(".PhoneNumberForm > .SubmitButton-container > .SubmitButton");
  }
  getPhoneNumberValidationtText() {
    return cy.get(
      ".PhoneNumberForm-FieldsContainer-phone > .InputWrapper > .InputWrapper-error"
    );
  }

  // Validation for address
  getAddressEditIcon() {
    return cy.get(
      "[data-testid=AddressSection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }
  removeAddress() {
    return cy.get('input[name="addressLine1"]');
  }
  removezipCode() {
    return cy.get('input[name="zipCode"]');
  }
  removeCity() {
    return cy.get('input[name="city"]');
  }
  removeRegion() {
    return cy.get('input[name="region"]');
  }
  country;
  removeCountry() {
    return cy.get('input[name="country"]');
  }
  getAddressSaveButton() {
    return cy.get(".AddressForm > .SubmitButton-container > .SubmitButton");
  }

  getAddressLineValidationtText() {
    return cy.get(
      "[data-testid=Address-addressLine1] > .VerticalInputContainer-error"
    );
  }
  getZipCodeValidationtText() {
    return cy.get(
      "[data-testid=Address-zipCode] > .VerticalInputContainer-error"
    );
  }
  getAddressCityValidationtText() {
    return cy.get("[data-testid=Address-city] > .VerticalInputContainer-error");
  }
  getAddressRegionValidationtText() {
    return cy.get(
      "[data-testid=Address-region] > .VerticalInputContainer-error"
    );
  }

  // Test for Identity verification
  getIdentityVerificationEditIcon() {
    return cy.get(
      "[data-testid=IdVerificationSection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }
  getIdentityVerificationDescription() {
    return cy.get(
      "[data-testid=IdVerificationSection] > .EditableContentContainer-text > .EditableContentContainer-children"
    );
  }
  getIdentityVerificationbutton() {
    return cy.get(
      "[data-testid=IdVerificationSection-startVerificationButton]"
    );
  }
  getIdentityVerificationModal() {
    return cy.get(".p15mwn5e");
  }

  // Test for Account Header Tabs
  getAccountHeader() {
    return cy.get(".AccountHeader-tabs");
  }
  getProfileTab() {
    return cy.get("[data-testid=PillTab-Profile]");
  }
  getDocumentTab() {
    return cy.get("[data-testid=PillTab-My_documents] > .PillTab-label");
  }
  getSettingTab() {
    return cy.get("[data-testid=PillTab-Settings] > .PillTab-label");
  }
  getProfilePage() {
    return cy
      .url()
      .should(
        "include",
        "https://en-hiring.wunderflats.xyz/en/account/profile"
      );
  }
  getDocumentsPage() {
    return cy
      .url()
      .should(
        "include",
        "https://en-hiring.wunderflats.xyz/en/account/documents"
      );
  }
  getSettingPage() {
    return cy
      .url()
      .should(
        "include",
        "https://en-hiring.wunderflats.xyz/en/account/settings"
      );
  }

  // Test for Nationalities country list
  getNationalityEditIcon() {
    return cy.get(
      "[data-testid=NationalitySection] > .EditableContentContainer-buttonContainer > [data-testid=EditableContentContainer-toggleButton]"
    );
  }

  getDropDownIcon() {
    return cy.get(".DropdownInput-icon").last().click({ force: true });
  }
  getNationalityList() {
    return cy.get(".DropdownInput-select").should("be.visible");
  }
  // Status Ring
  getTextForProgressRing() {
    return cy
      .get(".Avatar-tooltipText")
      .should(
        "have.text",
        "Please add missing information. You have almost completed your account but some necessary information is still missing. Complete your account now to accelerate your booking process and move into your new home sooner."
      );
  }
  getStatusRingMouseover() {
    return cy.get(".Avatar-progressRing").trigger("mouseover");
  }
  getStatusRingToolTip() {
    return cy.get(".popper-inner").should("be.visible");
  }
  getStatusRingToolTipHeading() {
    return cy.get(".Avatar-tooltipHeading").should("be.visible");
  }FullNameSection

  getStatusRingDescription() {
    return cy.get(".Avatar-tooltipHeading").should("be.visible");
  }
  
  // Valide all fileds in the profile page 
  getFullNameSection() {
    return cy.get('[data-testid=FullNameSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Full name");
  }
  getEmailSection() {
    return  cy.get('[data-testid=EmailSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Email");
  }
  getPhoneNumberSection() {
    return  cy.get('[data-testid=PhoneNumberSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Phone");
  } 
  getAddressSection() {
    return  cy.get('[data-testid=AddressSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Address");
  }
  getIdVerificationSection() {
    return  cy.get('[data-testid=IdVerificationSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Identity verification");
  }
  getBirthDateSection() {
    return  cy.get('[data-testid=BirthDateSection] > .EditableContentContainer-text > .EditableContentContainer-text-label').should("have.text", "Birth date");
  }
  getNationalitySection() {
    return  cy.get('.NationalityForm-FieldsContainer-nationality > .InputWrapper > .InputWrapper-label-container > .InputWrapper-label').should("have.text", "Nationality");
  }
}

export default ProfileTab;
