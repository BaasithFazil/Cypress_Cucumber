/// <reference types="Cypress" />

import { Elements } from "../../../PageObjects/PageActions/pageActions";
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const myElements = new Elements;

    Given('Visit Orange HRM website', function(){
        cy.visit('/web/index.php/auth/login');
    })

    When('user provide the user name as {string}', function(uname){
        myElements.username(uname)
    })

    When('user provide password', function(){
        myElements.password('admin123')
    })

    Then('Click on the login button to log in', function(){
        myElements.login()
    })

    When('Clicking the menu dropdown option', function() {
        myElements.clickoption()
    })

    Then('User Need to logout', function() {
        myElements.logout()
    })

    Then('The specified element {string} should be visible', function(myText){
        myElements.text(myText) 
    })

    When('Searching the {string} menu item in the search option', function(myvalue){
        myElements.search(myvalue);
    })

    Then('The filter option should be equals to {string}', function(myValue){
        myElements.valuesGenerate(myValue)
    })

    Then('Clear the text {string}', function(myInput){
        myElements.clear(myInput);
    })

    
