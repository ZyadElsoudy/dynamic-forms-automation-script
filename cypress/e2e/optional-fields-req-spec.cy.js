import { it } from "mocha"
import AppFormTest from "../Tests/app-form-test.cy.js";
import OptionalFieldsTest from "../Tests/optional-fields-test.cy"; 
import Helper from "../Helpers/test-helper.cy.js";
  Helper.CustomBeforeEach();
  it('submit optional request',()=>{
   OptionalFieldsTest.SubmitOptionalRequest();

  }) 
