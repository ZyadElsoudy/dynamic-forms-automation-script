import {it} from "mocha"
import Helper from "../Helpers/test-helper.cy.js";
import CFCandCoalitionRequestTest from "../Tests/CFC&Coalition-request-test.cy.js";

Helper.CustomBeforeEach();

it('Add new request for CFC and Colaition', () => {
CFCandCoalitionRequestTest.SubmitCFCandCoalitionRequest();
})