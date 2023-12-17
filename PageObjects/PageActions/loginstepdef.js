const pageElements = require('../PageElements/pageElements.json');

export class Login{

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
        try {
          cy.get(pageElements.dropdownLocators.menuDropdown).click();
          cy.get(pageElements.buttonLocators.logout).click();
        } catch (error) {
          // Handle the error, e.g., log it or perform some action
          console.error('Error during logout:', error);
        }
      }
}
