import AppFormPage from "../Pages/app-form-page.cy.js";

class FilterTest{
    SearchForField(){
         AppFormPage.Filter.type('Name');
         AppFormPage.ApplicantName.should('be.visible');
         AppFormPage.LegalCompanyName.should('be.visible');
         AppFormPage.TradingName.should('be.visible');
         AppFormPage.AnnualRevenueLastFinancialYear.should('not.be.visible');
    }
}

module.exports = new FilterTest();
