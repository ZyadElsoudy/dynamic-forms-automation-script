import { it } from "mocha"
import AppFormTest from "../Tests/app-form-test.cy.js";
import Helper from "../Helpers/test-helper.cy.js";
describe('truMarket-New Us Request',()=>{

  Helper.CustomBeforeEach();
   /* before('Visit URL Before any Execution' ,()=>{
        cy.visit('https://bestinsurance.trumarket.dev');
        cy.fixture('Data.json').as('testData');
  })*/
  it('Add new Request For All Markets',()=>{
   
    AppFormTest.SubmitAppFormForAllMarkets();

  }) 
})