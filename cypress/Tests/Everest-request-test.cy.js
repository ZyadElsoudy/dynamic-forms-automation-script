
import AppFormPage from "../Pages/app-form-page.cy";

class EverestRequestTest{
    SubmitEverestRequest(){
            AppFormPage.CloseDatalock.click();
            AppFormPage.CloseBBR.click();
            AppFormPage.CloseCoalition.click();
            AppFormPage.CloseCFC.click();
            AppFormPage.ApplicantName.type('Morine');
            AppFormPage.LocktonOffice.click({force:true});
            AppFormPage.SelectLocktonOffice.click();
            AppFormPage.LegalCompanyName.type('Company name is confidential');
            AppFormPage.TradeType.click();
            AppFormPage.SelectedTradeType.click();
            AppFormPage.SearchForAddress.type('123 William St, New York, NY 10038, USA{enter}');
            AppFormPage.Website.type("www.google.com");
            AppFormPage.UseClientDataToggle.click();
            AppFormPage.BusinessType.click({force:true});
            AppFormPage.SelectBusinessType.click();
            AppFormPage.IndustryType.click();
            AppFormPage.SelectIndustryType.click();
            AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
            AppFormPage.NumberOfNonUSEmployees.type('8');
            AppFormPage.AnnualRevenueLastFinancialYear.type('10,000');
            AppFormPage.PersonallyIdentifiableInfo.click({force:true});
            AppFormPage.EstimatePersonallyIdentifiableInfo.type(45);
            AppFormPage.MedicalRecords.click({force:true});
            AppFormPage.FinancialInformation.click();
            AppFormPage.EstimateFinancialInformation.type(25);
            AppFormPage.DriverLicenseNumber.click({force:true});
            AppFormPage.EstimateDriverLicense.type(10);
            AppFormPage.SocialSecurity.click({force:true});
            AppFormPage.PCIinformation.click({force:true});
            AppFormPage.RemoteNetworkAccess.click({force:true});
            AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
            AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
            AppFormPage.IndependentContractors.click({force:true});
            AppFormPage.AllEmailAccounts.click({force:true});
            AppFormPage.AwareOfPossiblePendingClaims.click({force:true});
            AppFormPage.RecentIncidentsAndClaimsAreClosed.click({force:true});
            AppFormPage.EffectiveDate.click({force:true});
            AppFormPage.scrollToNextMonth.click();

            AppFormPage.SelectedeffectiveDate.click({force:true});
            AppFormPage.AddTechnologyErrorsandOmissions.click({force:true});
            AppFormPage.GetQuoteButton.click();

            


    }
    
    }
module.exports = new EverestRequestTest();