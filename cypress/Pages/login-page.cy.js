class LoginPage {
  get LoginUserName() { return cy.get('#username'); }

  get LoginPassword() { return cy.get('#password'); }

  get LoginBtn() { return cy.get('#kc-login'); }
}
module.exports = new LoginPage();
