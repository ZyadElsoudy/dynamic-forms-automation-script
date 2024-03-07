import { it } from 'mocha';
import logsTest from '../Tests/logs-test.cy';
import Helper from '../Helpers/test-helper.cy.js';

describe('truMarket-New Us Request', () => {
  Helper.CustomBeforeEach();
  it('display logs', () => {
    logsTest.displayLogs();
  });
});
