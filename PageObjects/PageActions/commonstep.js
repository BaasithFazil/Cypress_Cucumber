const common = require('../PageElements/common.json')
const pageElements = require('../PageElements/pageElements.json')


export class Common {
    
    clickoption(input) {
        switch (input) {
            case 'Menu': 
            cy.get(common.dropdown.menu).click();
            break;

            case 'userManagement':
            cy.get(common.dropdown.userManagement).click();
            break;

            case 'Job':
            cy.get(common.dropdown.Job).click();
            break;

            default: 
            throw new Error ('Invalid type added:', input)
        }
    }

    clickdropdown(input) {

        if(input === "Users") {
            cy.get(common.dropdown.dropdownOpt.userManagement.users).click();
        } else if (input === "jobTitle") {
            cy.get(common.dropdown.dropdownOpt.Job.jobTitle).click();
        }
            
        
    }
    search(myInput) {
        cy.get(pageElements.search.mainSearch).click().type(myInput);
        cy.get(common.filterItem.child).click();

    }

    text(myText) {

        if(myText === "DashboardHeader") {
            cy.get(pageElements.text.mainHeader).should('be.visible', myText);
        } else if (myText === "profileName") {
            cy.get(pageElements.text.userName).should('be.visible', myText);
        } else {
            throw new Error(`added element name is not available: ${elementName}`);
        }
    }

    
    valuesGenerate(myInput) {
        cy.get(pageElements.values.searchMenu).should('have.length', myInput);
    }

    clear(myInput) {
        cy.get(pageElements.search.mainSearch).clear(myInput);
    }
}