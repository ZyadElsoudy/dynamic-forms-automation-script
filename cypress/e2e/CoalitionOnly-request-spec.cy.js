import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import CoalitionOnlyRequestTest from "../Tests/Coalition-only-request-test.cy.js";

  Helper.CustomBeforeEach();
  it('Add new Coalition Only Request',()=>{
   
    CoalitionOnlyRequestTest.SubmitCoalitionOnly();
    

  });
  