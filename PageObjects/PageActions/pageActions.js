


const pageElements = require('../PageElements/pageElements.json');

export class Elements{

    username(usernamee) {
        cy.get(pageElements.LoginPageLocators.username_text).type(usernamee);
        return
    }
    password(passwordd) {
        cy.get(pageElements.LoginPageLocators.password_text).type(passwordd);
        return
    }
    login() {
        cy.get(pageElements.buttonLocators.login).click();
        return
    }
    logout() {
        cy.get(pageElements.buttonLocators.logout).click();
    }

    clickoption() {
        cy.get(pageElements.dropdownLocators.menuDropdown).click();
    }

    text(myText) {
        cy.get(pageElements.headings.mainheader).should('be.visible', myText);
    }

}

