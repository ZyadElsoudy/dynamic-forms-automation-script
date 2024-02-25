import { it } from "mocha"

import Helper from "../Helpers/test-helper.cy.js";
import DatalockandBBRQuote from "../Tests/DatalockAndBBRQuote-test.cy"
import AppFormPage from "../Pages/app-form-page.cy.js"
 

describe('Create a quote for Datalock and BBR',()=>{

  Helper.CustomBeforeEach();
   /* before('Visit URL Before any Execution' ,()=>{
        cy.visit('https://bestinsurance.trumarket.dev');
        cy.fixture('Data.json').as('testData');
  })*/
  it('Create a quote for Datalock and BBR',()=>{
   
 
    DatalockandBBRQuote.DatalockAndBBR();
   

  }) 
})