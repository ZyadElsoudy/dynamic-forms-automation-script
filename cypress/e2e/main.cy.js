import { it } from "mocha"
import LoginTest from "../Tests/login-test.cy.js";
import NewRequestTest from "../Tests/new-request-test.cy.js";
describe('Dynamic Forms',()=>{
  
    before('Visit URL Before any Execution' ,()=>{
        cy.visit('https://bestinsurance.trumarket.dev');
        cy.fixture('Data.json').as('testData');
  })
  it('Add new Request',()=>{
    LoginTest.LoginWithValidCredentials();
    NewRequestTest.CreateNewRequest();
  }) 
})