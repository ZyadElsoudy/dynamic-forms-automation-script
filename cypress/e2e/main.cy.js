import { it } from "mocha"
import LoginTest from "../Tests/login-test.cy.js";
import NewRequestTest from "../Tests/new-request-test.cy.js";
import AppFormTest from "../Tests/app-form-test.cy.js";
import TriggerErrorSchema from "../Tests/GettingIntoErrorSchema.cy.js";

describe('Dynamic Forms',()=>{
  
    before('Visit URL Before any Execution' ,()=>{
        cy.visit('https://bestinsurance.trumarket.dev');
        cy.fixture('Data.json').as('testData');
  })
  it('Add new Request',()=>{
    //Login
    LoginTest.LoginWithValidCredentials();

    //CreateNewRequest
    NewRequestTest.CreateNewRequest();

    //Filling all form sections containg all markets
    AppFormTest.Addingclaims();

  }) 


describe('GettingIntoErrorSchema' , ()=>{
    it('GettingIntoErrorSchema', ()=>{
      

      //Login
      LoginTest.LoginWithValidCredentials();
      
      //CreateNewRequest
      NewRequestTest.CreateNewRequest();
  
      //Getting into the error schema
      TriggerErrorSchema.ErrorSchema();
  
    })
  })



})