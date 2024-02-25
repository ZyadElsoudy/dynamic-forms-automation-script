
import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import DatalockRequestTest from "../Tests/datalock-request-test.cy";
  Helper.CustomBeforeEach();
  it('Add new Datalock Request',()=>{
   
   DatalockRequestTest.SubmitDatalockRequest();
  

  }) 
