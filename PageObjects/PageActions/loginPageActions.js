


const loginElementLocators = require('../PageElements/loginPageElements.json')

export class loginPageElements{

    username(usernamee) {
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(usernamee);
        return
    }
    password(passwordd) {
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordd);
        return
    }
    login() {
        cy.get(loginElementLocators.buttonLocators.login).click();
        return
    }
    clickoption() {
        cy.get(loginElementLocators.dropdownLocators.menuDropdown).click();
    }
    logout() {
        cy.get(loginElementLocators.buttonLocators.logout).click();
    }

}