// import cypress from "cypress";
import { it } from 'mocha';
import Helper from '../Helpers/test-helper.cy.js';
import EverestAndBbrRequestTest from '../Tests/Everest&BBR-request-test.cy.js';
import FilterTest from '../Tests/Filter-test.cy.js';

Helper.CustomBeforeEach();

it('Add new Everest and BBR Request', () => {
  EverestAndBbrRequestTest.SubmitEverestAndBbrRequest();
});

it.only('Filter page', () => {
  FilterTest.SearchForField();
});
