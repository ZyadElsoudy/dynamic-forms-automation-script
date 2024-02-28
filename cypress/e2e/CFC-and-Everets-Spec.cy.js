import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import CFCAndEverestTest from "../Tests/CFC-and-everest-Test.cy.js";
  Helper.CustomBeforeEach();
  
  it('Add new CFC And Everest Request and getting declined quote',()=>{
   
    CFCAndEverestTest. SubmitCFCAndEverestRequest();
  
  }) 