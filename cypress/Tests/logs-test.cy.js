import QuoteScreenPage from '../Pages/quote-screen-page.cy';

class logsTest {
  displayLogs() {
    cy.wait(5000);
    QuoteScreenPage.AllLogs.click();
    cy.wait(5000);
    QuoteScreenPage.DatalockLogs.click();
    QuoteScreenPage.BBRLogs.click();
    QuoteScreenPage.CoalitionLogs.click();
    QuoteScreenPage.CFCLogs.click();
    QuoteScreenPage.EverestLogs.click();
  }
}
module.exports = new logsTest();
