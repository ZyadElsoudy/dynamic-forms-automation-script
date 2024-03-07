import AppFormPage from '../Pages/app-form-page.cy.js';
import QuoteScreenpage from '../Pages/quote-screen-page.cy.js';

class CFCControllerCoverageTest {
  SubmitCFCRequestAndGettingDeclinedQuote() {
    AppFormPage.jumpToApplicantSection.click();
    cy.wait(5000);
    AppFormPage.CloseDataLockIcon.click();
    AppFormPage.CloseBBR.click();
    AppFormPage.CloseCoallition.click();
    AppFormPage.CloseEverest.click();
    AppFormPage.LegalCompanyName.type('Company name is confidential');
    AppFormPage.SearchForAddress.type('123 William St, New York, NY 10038, USA{enter}');
    AppFormPage.Website.type('www.google.com');
    AppFormPage.UseClientDataToggle.click();
    AppFormPage.IndustryType.click();
    AppFormPage.SelectIndustryType.click();
    AppFormPage.Cannabis.click();
    AppFormPage.CryptocurrencyOrBlockchain.click();
    AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
    AppFormPage.AwareOfPossiblePendingClaims.click();
    AppFormPage.AmountOfClaims.type('1000');
    AppFormPage.EffectiveDate.click();
    AppFormPage.NextMonthOnCalender.click();
    AppFormPage.SelectedeffectiveDate.click({ force: true });
    AppFormPage.AddClimeCoverage.click();
    AppFormPage.GetQuoteButton.click();
    QuoteScreenpage.QuotesHeader.should('be.visible');
    QuoteScreenpage.StatusOfmarket.should('be.visible');
    // AppFormPage.GetQuoteButton.click();
  }
}
module.exports = new CFCControllerCoverageTest();