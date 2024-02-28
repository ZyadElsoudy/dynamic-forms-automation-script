import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import CFCControllerCoverageTest from "../Tests/CFC-Controller-Coverage-Test.cy.js";
  Helper.CustomBeforeEach();
  
  it('Add new CFC Request and getting declined quote',()=>{
   
    CFCControllerCoverageTest.SubmitCFCRequestAndGettingDeclinedQuote();
  
  }) 