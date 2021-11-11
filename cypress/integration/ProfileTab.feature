Feature: Profile page feature

    @profilePage
    Scenario: User should be able to navigate profile page

        Given User should be logged in
        When User clicks on menu button
        And User clicks on my account option
        Then User should be redirected to profile page


    Scenario: Verify the user is able to view validation error if  the first name is null
        When User remove first or second name or both
        And User click on save button
        Then User should be able to view  the validation error

    Scenario: Verify the user is able to view validation error if  the email address is null
        When User remove email address
        And User click on email save button
        Then User should be able to view  the email validation error

    Scenario: Verify the user is able to view validation error if  the address is null
        When User remove address
        And User click on address save button
        Then User should be able to view  the address validation error

    Scenario: Verify the user is able to view Identity verification description and Button
        When User click on Identity verification edit icon
        And User should view Identity verification description
        Then User should be able to view Identity verification button

    Scenario: Verify the user is able to view account Header tabs
        When User is on the profile page
        And User click on profile,my documents and settings
        Then User should be able to view all tabs respective page

    Scenario: Verify the user is able to list of countries for nationality
        When User click on nationality edit icon
        And User click on select icon for nationality tab
        Then User should be able to view list of countries nationalities

    Scenario: Verify the user is able to view profile progress ring
        When User is on profile page
        And  User make mouseover on the progress ring
        Then User should be able to view account the perfectage with description

    Scenario: Verify the user is able to view profile page Header and Footer
        When User is on profile page
        And  User naviagte to profile header
        And  User naviagte to profile footer
        Then User should be able to view header and footer

    Scenario: Verify the user is able to view all fields  in the profile page 
        When User is on profile page
        And  User naviagate first name 
        Then User should be able to view all fields

        Scenario: Verify address API implementation  
        When User is on profile page for google
        And  User type any address in address field
        Then User should be able to view google api adress suggestion 

        Scenario: Verify select country in the address
        When User to edit address
        And  User to select  the country
        Then User should be able to view selected country 









