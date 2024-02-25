import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import DatalockAndCFCRequestTest from "../Tests/datalock-and-CFC-request-test.cy";
  Helper.CustomBeforeEach();
  
  it('Add new Datalock & CFC Request',()=>{
   
    DatalockAndCFCRequestTest.SubmitDatalockAndCFC();
  
  }) 