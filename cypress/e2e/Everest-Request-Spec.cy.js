import { it } from 'mocha';
import Helper from '../Helpers/test-helper.cy.js';
import EverestRequstTeste from '../Tests/Everest-Request-Test.cy.js';

Helper.CustomBeforeEach();

it('Add new Everest Request', () => {
  EverestRequstTeste.SubmitEverestRequest();
});
