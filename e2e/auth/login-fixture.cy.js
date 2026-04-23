describe('Login Flow with Fixture', () => {
    it('logs in using fixture data', function () {
      cy.fixture('user').then((user) => {
        cy.visit('/login');
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
    });
  });