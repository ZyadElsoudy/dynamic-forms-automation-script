
import { it } from "mocha"
//import AppFormTest from "../Tests/app-form-test.cy.js";
import Helper from "../Helpers/test-helper.cy.js";
import DatalockRequestTest from "../Tests/datalock-request-test.cy";
   /* before('Visit URL Before any Execution' ,()=>{
        cy.visit('https://bestinsurance.trumarket.dev');
        cy.fixture('Data.json').as('testData');
  })*/
  Helper.CustomBeforeEach();
  it('Add new Datalock Request',()=>{
   
   DatalockRequestTest. SubmitDatalockRequest();

  }) 
