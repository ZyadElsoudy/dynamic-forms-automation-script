import { it } from "mocha"
import AppFormTest from "../Tests/app-form-test.cy.js";
import Helper from "../Helpers/test-helper.cy.js";

  Helper.CustomBeforeEach();
 it('Add new Request For All Markets',()=>{
   
    AppFormTest.SubmitAppFormForAllMarkets();
    
  }) 
