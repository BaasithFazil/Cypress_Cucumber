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

        switch (input) {
            case 'Users': 
            cy.get(common.dropdown.dropdownOpt.userManagement.users).click();
            cy.url().should('include', common.dropdown.dropdownlocation.userManagement.users);
            break;

            case 'Job Title': 
            cy.get(common.dropdown.dropdownOpt.Job.jobTitle).click();
            cy.url().should('include', common.dropdown.dropdownlocation.Job.jobTitle);
            break;

            case 'Pay Grades':
            cy.get(common.dropdown.dropdownOpt.Job.payGrades).click();
            cy.url().should('include', common.dropdown.dropdownlocation.Job.payGrades);
            break;

            case 'Employment Status':
            cy.get(common.dropdown.dropdownOpt.Job.employmentStatus).click();
            cy.url().should('include', common.dropdown.dropdownlocation.Job.employmentStatus);
            break;

            case 'Job Categories':
            cy.get(common.dropdown.dropdownOpt.Job.jobCategory).click();
            cy.url().should('include', common.dropdown.dropdownlocation.Job.jobCategory);
            break;

            case 'Work Shifts':
            cy.get(common.dropdown.dropdownOpt.Job.workShifts).click();
            cy.url().should('include', common.dropdown.dropdownlocation.Job.workShifts);
            break;

            case 'General Information':
            cy.get(common.dropdown.dropdownOpt.organization.generalInformation).click();
            cy.url().should('include', common.dropdown.dropdownlocation.organization.generalInformation);
            break;

            case 'Locations':
            cy.get(common.dropdown.dropdownOpt.organization.locations).click();
            cy.url().should('include', common.dropdown.dropdownlocation.organization.locations);
            break;

            case 'Structure':
            cy.get(common.dropdown.dropdownOpt.organization.Structure).click();
            cy.url().should('include', common.dropdown.dropdownlocation.organization.Structure);
            break;

            case 'Structure':
            cy.get(common.dropdown.dropdownOpt.organization.Structure).click();
            cy.url().should('include', common.dropdown.dropdownlocation.organization.Structure);
            break;

            case 'Skills':
            cy.get(common.dropdown.dropdownOpt.qualification.skills).click();
            cy.url().should('include', common.dropdown.dropdownlocation.qualification.skills);
            break;

            case 'Education':
            cy.get(common.dropdown.dropdownOpt.qualification.education).click();
            cy.url().should('include', common.dropdown.dropdownlocation.qualification.education);
            break;

            case 'Licenses':
            cy.get(common.dropdown.dropdownOpt.qualification.licenses).click();
            cy.url().should('include', common.dropdown.dropdownlocation.qualification.licenses);
            break;

            case 'Languages':
            cy.get(common.dropdown.dropdownOpt.qualification.languages).click();
            cy.url().should('include', common.dropdown.dropdownlocation.qualification.languages);
            break;

            case 'Memberships':
            cy.get(common.dropdown.dropdownOpt.qualification.memberships).click();
            cy.url().should('include', common.dropdown.dropdownlocation.qualification.memberships);
            break;

            case 'Nationalities':
            cy.get(common.dropdown.dropdownOpt.nationalities).click();
            cy.url().should('include', common.dropdown.dropdownlocation.nationalities);
            break;

            case 'Corporate Branding':
            cy.get(common.dropdown.dropdownOpt.corporateBranding).click();
            cy.url().should('include', common.dropdown.dropdownlocation.corporateBranding);
            break;

            case 'Email Configuration':
            cy.get(common.dropdown.dropdownOpt.configurations.emailConfiguration).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.emailConfiguration);
            break;

            case 'Email Subscription':
            cy.get(common.dropdown.dropdownOpt.configurations.emailSubscription).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.emailSubscription);
            break;

            case 'Localization':
            cy.get(common.dropdown.dropdownOpt.configurations.localization).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.localization);
            break;

            case 'Language Packages':
            cy.get(common.dropdown.dropdownOpt.configurations.languagePackages).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.languagePackages);
            break;

            case 'Language Modules':
            cy.get(common.dropdown.dropdownOpt.configurations.modules).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.modules);
            break;

            case 'Social Media Authentication':
            cy.get(common.dropdown.dropdownOpt.configurations.socialMediaAuthentication).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.socialMediaAuthentication);
            break;

            case 'Register OAuth Client':
            cy.get(common.dropdown.dropdownOpt.configurations.registerAuthClient).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.registerAuthClient);
            break;

            case 'LDAP Configuration':
            cy.get(common.dropdown.dropdownOpt.configurations.ldpaConfiguration).click();
            cy.url().should('include', common.dropdown.dropdownlocation.configurations.ldpaConfiguration);
            break;

            default: 
            throw new Error('Invalid dropdown option added', input)
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