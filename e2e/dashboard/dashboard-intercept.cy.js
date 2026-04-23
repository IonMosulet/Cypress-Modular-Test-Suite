describe('Dashboard with Network Spy', () => {
    it('logs in and confirms product list is visible', () => {
      // Spy on GET requests to /api/products
      // Even though the app doesn’t make this request, we show how intercept syntax works
      cy.intercept('GET', '/api/products').as('getProducts');
  
      // Use our custom command from earlier to simulate login
      cy.login(); // sets localStorage and redirects to dashboard
  
      // Visit the dashboard page
      cy.visit('/dashboard');
  
      // The app loads data with a 500ms artificial delay, so we wait for the UI
      cy.wait(500);
  
      // Assert that the real, static product data is displayed
      cy.contains('Coffee Beans');
      cy.contains('Bluetooth Speaker');
      cy.contains('Notebook');
  
      // Add a log so learners know intercept was set up
      cy.log('Intercept was registered, even if not triggered.');
    });
  });