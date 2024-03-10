import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import BBRColitionRequestTest from "../Tests/bbr&Coalition-request-test.cy.js";

  Helper.CustomBeforeEach();
  it('Add new BBR & Colition Request',()=>{
   
    BBRColitionRequestTest.SubmitBBRColition();

  });
  