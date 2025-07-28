
    import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
    
    Given(/^I am on the home page$/, () => {
        cy.visit('/');
    });
    
    When(/^I click on doc link$/, () => {
        cy.get('[href="https://docs.cypress.io"]').should('exist').invoke('attr', 'target', '_self').click();
    });
    
    Then(/^I should see cypress doc$/, () => {
        cy.get('h1').should('contain', 'Why Cypress?');
    });
            