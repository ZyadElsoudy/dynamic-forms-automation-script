import { it } from "mocha"
import DeclinedBBRRequest from "../Tests/declined-BBR-test.cy"; 
import Helper from "../Helpers/test-helper.cy.js";


  Helper.CustomBeforeEach();

  it('submit Declined BBR Request',()=>{
    DeclinedBBRRequest.SubmitBBRDecRequest();

  }) 
