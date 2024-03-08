
import LoginTest from "../Tests/login-test.cy.js";
import NewRequestTest from "../Tests/new-request-test.cy.js";
class Helper{
    CustomBeforeEach() {
        before(() => {
            cy.visit('https://bestinsurance.trumarket.dev');
            cy.fixture('Data.json').as('testData');
            LoginTest.LoginWithValidCredentials();
            NewRequestTest.CreateNewRequest();

        });
    }
}
module.exports=new Helper();