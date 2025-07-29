
    describe('Example Test', () => {
        it('visits the base URL', () => {
            cy.visit('https://test.notchhr.io/login');
            cy.get('#email-field').should('be.visible').type('adesina@myxalary.com')
            cy.get("input[type='password']").type('password');
            cy.get("button[type='submit']").click();
                  
                });
              
        });
   
            