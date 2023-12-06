/// <reference types="Cypress" />

import { loginPageElements } from "../../../PageObjects/PageActions/loginPageActions";
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const Login_Elements = new loginPageElements

    Given('Visit Orange HRM website', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    When('user provide the user name as {string}', function(uname){
        Login_Elements.username(uname)
    })

    When('user provide password', function(){
        Login_Elements.password('admin123')
    })

    Then('Click on the login button into the orange HRM website', function(){
        Login_Elements.login()
    })

    When('Clicking the menu dropdown option', function() {
        Login_Elements.clickoption()
    })

    Then('User Need to logout', function() {
        Login_Elements.logout()
    })

    
