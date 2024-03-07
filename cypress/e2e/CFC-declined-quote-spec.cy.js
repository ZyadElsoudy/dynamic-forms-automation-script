import { it } from 'mocha';
import Helper from '../Helpers/test-helper.cy.js';
import CFCDeclinedQuoteTest from '../Tests/CFC-declined-quote-test.cy';

Helper.CustomBeforeEach();

it('Add new CFC Request and getting declined quote', () => {
  CFCDeclinedQuoteTest.SubmitCFCRequestAndGettingDeclinedQuote();
});
