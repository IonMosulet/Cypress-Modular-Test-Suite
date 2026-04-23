describe('Login with Environment Variables', () => {
    it('logs in using env vars', () => {
      cy.visit('/login');
      cy.get('#email').type(Cypress.env('testEmail'));
      cy.get('#password').type(Cypress.env('testPassword'));
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });