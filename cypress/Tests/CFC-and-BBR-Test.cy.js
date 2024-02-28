import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";

class CFCAndBBRTest{

    SubmitCFCAndBBRRequest(){
        AppFormPage.jumpToApplicantSection.click();
        cy.wait(5000)
        AppFormPage.CloseDataLockIcon.click();
        AppFormPage.CloseEverest.click();
        AppFormPage.CloseCoallition.click();
        
       // AppFormPage.ApplicantName.type("Emad");
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        AppFormPage.Website.type("www.google.com");
        AppFormPage.UseClientDataToggle.click();
        // AppFormPage.BusinessType.click({force:true});
        // // AppFormPage.SelectBusinessType.click();
        AppFormPage.IndustryType.click();
        AppFormPage.SelectIndustryType.click();
        AppFormPage.AdultContent.click();
        AppFormPage.Cannabis.click();
        AppFormPage.CareProvider.click();
        AppFormPage.CryptocurrencyOrBlockchain.click();
        AppFormPage.DataProcessing.click();
        AppFormPage.DebtCollection.click();
        AppFormPage.Gambling.click();
        AppFormPage.PaymentProcessingn.click();
        AppFormPage.StorageHosting.click();
        AppFormPage.NumberOfEmployees.dblclick().clear();
        AppFormPage.NumberOfEmployees.type('3');
        AppFormPage.NonUSRevenue.click({force:true});
        AppFormPage.NonUSRevenueAmount.dblclick().clear();
        AppFormPage.NonUSRevenueAmount.type('20');
        AppFormPage.ChangeInBusinessActivities.click();
        AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
        AppFormPage.NonUSRevenue.click();
        AppFormPage.ChangeInBusinessActivities.click();
        AppFormPage.AccessWebBasedEmail.click();
        AppFormPage.CriticalPatching.click();  
        AppFormPage.RemoteNetworkAccess.click();
        AppFormPage.AdministratorAndPrivilegedAccounts.click();
        AppFormPage.ExternalRemoteDesktopProtocols.click();
        AppFormPage.IndependentContractors.click();
        AppFormPage.AllEmailAccounts.click();
        AppFormPage.PerformCyberSecurityTraining.click();
        AppFormPage.TakedownProcedures.click();
        AppFormPage.FormalReviewBroadcast.click();
        AppFormPage.AwareOfPossiblePendingClaims.click();
        AppFormPage.AmountOfClaims.type('1000');
        AppFormPage.BbrAdditionalClaim.click();
        AppFormPage.EffectiveDate.click();
        AppFormPage.NextMonthOnCalender.click();
        AppFormPage.SelectedeffectiveDate.click({force:true});
        AppFormPage.Beazlyalimit.click({force:true});
        AppFormPage.SelectedBeazlylimit.click();
        AppFormPage.BeazlyaRetention.click({force:true});
        AppFormPage.SelectedBeazlyRetention.click();
        AppFormPage.AddClimeCoverage.click();
        AppFormPage.GetQuoteButton.click();
        QuoteScreenpage.QuotesHeader.should('be.visible');
        QuoteScreenpage.StatusOfmarket.should('be.visible');
        
    }
}
module.exports=new CFCAndBBRTest();