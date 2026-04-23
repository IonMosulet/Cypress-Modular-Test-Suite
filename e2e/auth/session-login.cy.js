describe('Login with cy.session()', () => {
    beforeEach(() => {
      // This will cache the login session
      // The first time it runs, it performs the full login flow
      // Subsequent tests reuse the stored session without running the commands again
      cy.session('adminUser', () => {
        cy.visit('/login');
        cy.get('#email').type('admin@test.com');
        cy.get('#password').type('admin123');
        cy.get('button[type="submit"]').click();
  
        // Confirm we're on dashboard after login
        cy.url().should('include', '/dashboard');
      });
    });
  
    it('accesses the dashboard with session cache', () => {
      // Cypress restores the session automatically here
      cy.visit('/dashboard');
      cy.contains('Product Dashboard');
    });
  
    it('navigates to Add Product page using session', () => {
      cy.visit('/add-product');
      cy.contains('Add New Product');
    });
  });