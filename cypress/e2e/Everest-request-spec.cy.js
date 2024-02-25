import {it} from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import EverestRequestTest from "../Tests/Everest-request-test.cy.js";

Helper.CustomBeforeEach();

it('Add new Everest Request',() => {
    EverestRequestTest.SubmitEverestRequest();
})



 
 
