import { it } from "mocha"
import datalockAndCoalition from "../Tests/datalock-coalition-test.cy.js"; 
import Helper from "../Helpers/test-helper.cy.js";


  Helper.CustomBeforeEach();

  it('submit datalock and coalition request',()=>{
      datalockAndCoalition.SubmitDatalockAndCoalition();

  }) 
