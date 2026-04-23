describe('Login Flow', () => {
  it('logs in using custom command', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
      cy.url().should('include', '/dashboard');
      cy.get('body')
        .invoke('text')
        .should('match', /welcome|dashboard/i);
    });
  });
});