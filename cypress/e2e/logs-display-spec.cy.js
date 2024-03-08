import { it } from "mocha"
import logsTest from "../Tests/logs-test.cy"; 
import Helper from "../Helpers/test-helper.cy.js";
  Helper.CustomBeforeEach();
  it('display logs',()=>{
   logsTest.displayLogs();

  }) 
