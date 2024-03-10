import { it } from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import EverestColitionRequestTest from "../Tests/Everest&Colition-request-test.cy.js";

  Helper.CustomBeforeEach();
  it('Add new Everest & Colition Request',()=>{
   
    EverestColitionRequestTest.SubmitEverestColition();

  });
  