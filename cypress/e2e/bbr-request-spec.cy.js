import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import BBRRequestTest from "../Tests/bbr-request-test.cy.js";

  Helper.CustomBeforeEach();
  it('Add new BBR Request',()=>{
   
    BBRRequestTest.SubmitBBRRequestOnly();
    

  });
  