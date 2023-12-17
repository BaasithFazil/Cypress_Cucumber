/// <reference types="Cypress" />

import { Common } from "../../../PageObjects/PageActions/commonstep";
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";


const common = new Common;


Then('The specified element {string} should be visible', function(myText){
    common.text(myText);
})

When('Search the {string} menu item in the search option', function(myvalue){
    common.search(myvalue);
})

Then('The filter option should be equals to {string}', function(myValue){
    common.valuesGenerate(myValue)
})

Then('Clear the text {string}', function(myInput){
    common.clear(myInput);
})

And('Click the {string} dropdown option', function(myInput) {
    common.clickoption(myInput);
})


Then('Click the dropdown option {string} as', (input)=> {
    common.clickdropdown(input);
})


