import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";

class CFCAndEveresTest{

    SubmitCFCAndEverestRequest(){
        AppFormPage.jumpToApplicantSection.click();
        cy.wait(5000)
        AppFormPage.CloseDataLockIcon.click();
        AppFormPage.CloseBBR.click();
        AppFormPage.CloseCoallition.click();
        
        AppFormPage.ApplicantName.type("Emad");
        AppFormPage.LocktonOffice.click({force:true});
        AppFormPage.SelectLocktonOffice.click();
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        AppFormPage.TradingName.type("name of the trade is confidential")
        AppFormPage.TradeType.click();
        AppFormPage.SelectedTradeType.click();
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        AppFormPage.Website.type("www.google.com");
        AppFormPage.UseClientDataToggle.click();
        AppFormPage.BusinessType.click({force:true});
        AppFormPage.SelectBusinessType.click();
        AppFormPage.IndustryType.click();
        AppFormPage.SelectIndustryType.click();
        AppFormPage.Cannabis.click();
        AppFormPage.CryptocurrencyOrBlockchain.click();
        AppFormPage.NumberOfEmployees.dblclick().clear();
        AppFormPage.NumberOfEmployees.type('3');
        AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
        AppFormPage.NumberOfNonUSEmployees.type('3');
        AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
        AppFormPage.PersonallyIdentifiableInfo.click({force :true});
        AppFormPage.EstimatePersonallyIdentifiableInfo.type(45);
        AppFormPage.MedicalRecords.click({force:true});
        AppFormPage.EstimateMedicalRecords.type(100);
        AppFormPage.FinancialInformation.click({force:true});
        AppFormPage.EstimateFinancialInformation.type(25);
        AppFormPage.DriverLicenseNumber.click({force:true});
        AppFormPage.EstimateDriverLicense.type(10);
        AppFormPage.SocialSecurity.click({force:true});
        AppFormPage.PCIinformation.click({force:true});
        AppFormPage.RemoteNetworkAccess.click();
        AppFormPage.AdministratorAndPrivilegedAccounts.click();
        AppFormPage.ExternalRemoteDesktopProtocols.click();
        AppFormPage.IndependentContractors.click();
        AppFormPage.AllEmailAccounts.click();
        AppFormPage.AwareOfPossiblePendingClaims.click();
        AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
        AppFormPage.NatureOflegalAction.click({force:true});
        AppFormPage.SelectedNatureOfLegalAction.click();
        AppFormPage.AmountOfClaims.type('1000');
        AppFormPage.RemediationFollowingRecentIncidents.click({force:true});
        AppFormPage.SelectedRemediation.click();
        AppFormPage.EffectiveDate.click();
        AppFormPage.NextMonthOnCalender.click();
        AppFormPage.SelectedeffectiveDate.click({force:true});
        AppFormPage.AddClimeCoverage.click();
        AppFormPage.AddTechnologyErrorsandOmissions.click();
        AppFormPage.GetQuoteButton.click();
        QuoteScreenpage.QuotesHeader.should('be.visible');
        QuoteScreenpage.StatusOfmarket.should('be.visible');
        
    }
}
module.exports=new CFCAndEveresTest();