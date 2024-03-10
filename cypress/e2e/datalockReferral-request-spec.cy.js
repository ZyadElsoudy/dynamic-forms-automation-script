import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import DatalockReferral from "../Tests/DatalockOnly-refferal -request-test.cy.js";

  Helper.CustomBeforeEach();
  it('Add new Datalock Referral Request',()=>{
   
    DatalockReferral.SubmitDatalockReferral();

  });
  