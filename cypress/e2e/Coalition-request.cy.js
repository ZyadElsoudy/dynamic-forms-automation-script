import {it} from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import CoalitionRequestTest from "../Tests/Coalition-request-test.cy.js";

Helper.CustomBeforeEach();

it('Add new request for CFC and Colaition', () => {
CoalitionRequestTest.SubmitCoalitionRequest();
})