import { it } from 'mocha';
import Helper from '../Helpers/test-helper.cy.js';
import CFCAndBBRTest from '../Tests/CFC-and-BBR-Test.cy.js';

Helper.CustomBeforeEach();

it('Add new CFC And BBR Request and getting declined quote', () => {
  CFCAndBBRTest.SubmitCFCAndBBRRequest();
});
