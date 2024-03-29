import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
let cntr =6;
class DatalockRequestTest{
    SubmitDatalockRequest(){
        
     AppFormPage.jumpToApplicantSection.click();
     cy.wait(5000)
     AppFormPage.CloseBBR.click();
     AppFormPage.CloseCFC.click();
     AppFormPage.CloseCoallition.click();
     AppFormPage.CloseEverest.click();
     AppFormPage.LegalCompanyName.type("Company name is confidential");
     AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
     AppFormPage.Website.type("www.google.com");
     AppFormPage.UseClientDataToggle.click();
     AppFormPage.DatalockIndustry.click();
     AppFormPage.SelectDatalockIndustry.click();
     AppFormPage.BusinessDescription.type('business');
     AppFormPage.NumberOfEmployees.type('3');
     AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
     AppFormPage.NonUSRevenue.click({force:true});
     AppFormPage.EEARevenue.click();
     AppFormPage.HighRiskTerritories.click();
     AppFormPage.IncludeTRIA.click();
     AppFormPage.JumpToCyberRiskSection.click();
     cy.wait(5000);
     AppFormPage.PersonallyIdentifiableInfo.click({force :true});
     AppFormPage.EstimatePersonallyIdentifiableInfo.should('be.visible').type(45);
     AppFormPage.MedicalRecords.click({force:true});
     AppFormPage.EstimateMedicalRecords.type(100);
     AppFormPage.FinancialInformation.click({force:true});
     AppFormPage.EstimateFinancialInformation.type(25);
     AppFormPage.DriverLicenseNumber.click({force:true});
     AppFormPage.EstimateDriverLicense.type(10);
     AppFormPage.SocialSecurity.click({force:true});
     AppFormPage.PCIinformation.click({force:true});
     AppFormPage.PerformsRegularBackups.click();
     AppFormPage.ProtectBackups.click();
     AppFormPage.EmailFiltering.click();
     AppFormPage.AccessWebBasedEmail.click();
     AppFormPage.AntiVirus.click();
     AppFormPage.Encryption.click();
     AppFormPage.DownloadedToPortableDevices.click();
     AppFormPage.CriticalPatching.click();
     AppFormPage.RemoteNetworkAccess.click();
     AppFormPage.AdministratorAndPrivilegedAccounts.click();
    
    AppFormPage.ExternalRemoteDesktopProtocols.click();
    
    AppFormPage.IndependentContractors.click();
   
    AppFormPage.AllEmailAccounts.click();
   
    AppFormPage.ChangePasswordQuarterly.click();
   
    AppFormPage.StrongPasswords.click();
   
    AppFormPage.PerformCyberSecurityTraining.click();
    
    AppFormPage.EOLOrEOSstillInUse.click();
   
    AppFormPage.EOLorEOSSegregated.click();
    
    AppFormPage.BiometricRecords.click();
    
    AppFormPage.PciCompliant.click();
    AppFormPage.InfringementOfCopyright.click();
    AppFormPage.InfringementOfTrademark.click();
    AppFormPage.LibelOrSlander.click();
    AppFormPage.EffectiveDate.click();
    AppFormPage.scrollToNextMonth.click();
    AppFormPage.SelectedeffectiveDate.click();
    AppFormPage.DataLockLimit.click({force:true});
    AppFormPage.SelectedDataLockLimit.click();
    AppFormPage.GetQuoteButton.click();
    QuoteScreenpage.QuotesHeader.should('be.visible');
    
    }
}
module.exports=new DatalockRequestTest();