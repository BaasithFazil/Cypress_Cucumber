


const pageElements = require('../PageElements/pageElements.json');

export class Elements{

    username(usernamee) {
        cy.get(pageElements.LoginPageLocators.username).type(usernamee);
        return
    }
    password(passwordd) {
        cy.get(pageElements.LoginPageLocators.password).type(passwordd);
        return
    }
    login() {
        cy.get(pageElements.buttonLocators.login).click();
        return
    }
    logout() {
        cy.get(pageElements.dropdownLocators.menuDropdown).click()
        cy.get(pageElements.buttonLocators.logout).click()
    }

    clickoption() {
        cy.get(pageElements.dropdownLocators.menuDropdown).click();
    }

    text(myText) {

        if(myText === "DashboardHeader") {
            cy.get(pageElements.text.mainHeader).should('be.visible', myText);
        } else if (myText === "profileName") {
            cy.get(pageElements.text.userName).should('be.visible', myText);
        } else {
            throw new Error(`Unsupported elementName: ${elementName}`);
        }
    }


    search(myInput) {
        cy.get(pageElements.search.mainSearch).click().type(myInput);
    }
    
    valuesGenerate(myInput) {
        cy.get(pageElements.values.searchMenu).should('have.length', myInput);
    }

    clear(myInput) {
        cy.get(pageElements.search.mainSearch).clear(myInput);
    }
}

