import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import DataLockAndEverestRequestTest from "../Tests/create-datalock-and-everest-request-test.cy";
  Helper.CustomBeforeEach();
  
  it('Add new Datalock & Everest Request',()=>{
   
   DataLockAndEverestRequestTest.SubmitDatalockAndEverestRequest();
  
  }) 