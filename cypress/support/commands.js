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
Cypress.on('uncaught:exception', (err, runnable) => {
    // Customize the behavior when an uncaught exception occurs
    // For example, log the error or take a screenshot
   console.error('Uncaught Exception:', err.message);
    // You can also take a screenshot or perform other actions here
    // cy.screenshot();
    
    // Return false to prevent the error from failing the test
    return false;
  });
  /*Cypress.Commands.overwrite('click', (originalFn, ...args) => {
     originalFn(...args);
      cy.wait(10000); // Adjust the wait time as needed
    
  });
  
  Cypress.Commands.overwrite('type', (originalFn, ...args) => {
    originalFn(...args); // Call original function without returning a promise
    return cy.wait(10000); // Chain wait without returning a new promise
  });
  Cypress.Commands.overwrite('get', (originalFn, ...args) => {
    originalFn(...args);
     cy.wait(10000); // Adjust the wait time as needed
   
 });*/
  
  // Add more commands as needed (e.g., select, submit, etc.)
  