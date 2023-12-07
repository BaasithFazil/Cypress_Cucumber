/// <reference types="Cypress" />

import { Elements } from "../../../PageObjects/PageActions/pageActions";
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const myElements = new Elements;

    Given('Visit Orange HRM website', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    When('user provide the user name as {string}', function(uname){
        myElements.username(uname)
    })

    When('user provide password', function(){
        myElements.password('admin123')
    })

    Then('Click on the login button into the orange HRM website', function(){
        myElements.login()
    })

    When('Clicking the menu dropdown option', function() {
        myElements.clickoption()
    })

    Then('User Need to logout', function() {
        myElements.logout()
    })


    Then('The header element {string} should be visible', function(){
        myElements.text()
    })

    
