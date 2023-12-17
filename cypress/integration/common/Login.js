/// <reference types="Cypress" />

import { Login } from "../../../PageObjects/PageActions/loginstepdef";
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

const login = new Login;

    Given('the user is on the {string} page', (url)=> {

        if(url === "Login") {
            cy.visit("/web/index.php/auth/login");
        } else if (url === "Home") {
            cy.visit("/")
        } else {
            throw new Error('Invalid URL name specified', {$url})
        }
    })

    Then('User log into the system with {string} username and {string} password', (username, password)=> {
        login.username(username);
        login.password(password);
        login.login();
    })

    And('User log out', function(){
        login.logout();
    })

