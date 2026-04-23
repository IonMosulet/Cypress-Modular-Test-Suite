// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('admin123');
    cy.get('button[type="submit"]').click();
  });

  Cypress.Commands.add('addProduct', (product) => {
    cy.visit('/add-product');
    cy.get('#name').type(product.name);
    cy.get('#price').type(product.price);
    cy.get('#category').type(product.category);
    cy.get('button[type="submit"]').click();
  });