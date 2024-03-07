import LoginPage from '../Pages/login-page.cy.js';

class LoginTest {
  LoginWithValidCredentials() {
    cy.get('@testData').its('users').each((user) => {
      LoginPage.LoginUserName.should('be.visible').type(user.email);
      LoginPage.LoginPassword.type(user.password);
    });
    LoginPage.LoginBtn.click();
  }
}
module.exports = new LoginTest();
