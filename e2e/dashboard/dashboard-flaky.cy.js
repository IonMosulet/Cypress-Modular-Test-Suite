describe('Flaky Dashboard Test', () => {
    beforeEach(() => {
      cy.session('adminUser', () => {
        cy.visit('/login');
        cy.get('#email').type('admin@test.com');
        cy.get('#password').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
    });
  

    it('waits correctly for product data to load', () => {
        cy.intercept('GET', '/api/products', (req) => {
          // artificially delay the API response by 2 seconds
          req.on('response', (res) => {
            return new Promise((resolve) => setTimeout(resolve, 2000));
          });
        }).as('getProductsSlow');
        cy.visit('/dashboard');

       
        // Wait for the container and then assert
        cy.get('.products-list').should('contain', 'Notebook');

      
      });
  });