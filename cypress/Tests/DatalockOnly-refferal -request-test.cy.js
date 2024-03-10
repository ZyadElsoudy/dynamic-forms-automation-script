import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
class DatalockReferral{

    SubmitDatalockReferral(){
        AppFormPage.jumpToApplicantSection.click();
        cy.wait(5000)
        AppFormPage.CloseBBR.click();
        AppFormPage.CloseCFC.click();
        AppFormPage.CloseEverest.click();
        AppFormPage.CloseCoallition.click();
                                                    //Applicant Part//
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        AppFormPage.Website.type("www.google.com");
        AppFormPage.UseClientDataToggle.click({force:true});
        AppFormPage.DatalockIndustry.click();
        AppFormPage.SelectDatalockIndustry.click();
        AppFormPage.BusinessDescription.type('Business Description');
        AppFormPage.NumberOfEmployees.type('3');
        AppFormPage.AnnualRevenueLastFinancialYear.type('200000');
        AppFormPage.NonUSRevenue.click({force:true});
        AppFormPage.EEARevenue.click();
        AppFormPage.HighRiskTerritories.click();
        AppFormPage.IncludeTRIA.click();
                                                      // Cyber Risk part //
        AppFormPage.PersonallyIdentifiableInfo.click();
        AppFormPage.EstimatePersonallyIdentifiableInfo.type('30');
        AppFormPage.MedicalRecords.click();
        AppFormPage.EstimateMedicalRecords.type('10');
        AppFormPage.FinancialInformation.click({force:true});
        AppFormPage.EstimateFinancialInformation.type('10');
        AppFormPage.DriverLicenseNumber.click({force:true});
        AppFormPage.EstimateDriverLicense.type('2');
        AppFormPage.SocialSecurity.click({force:true});
        AppFormPage.PCIinformation.click({force:true});
        AppFormPage.PerformsRegularBackups.click({force:true});
        AppFormPage.ProtectBackups.click({force:true});
        AppFormPage.EmailFiltering.click({force:true});
        AppFormPage.AccessWebBasedEmail.click({force:true});
        AppFormPage.AntiVirus.click({force:true});
        AppFormPage.Encryption.click({force:true});
        AppFormPage.DownloadedToPortableDevices.click({force:true});
        AppFormPage.CriticalPatching.click({force:true});
        AppFormPage.RemoteNetworkAccess.click({force:true});
        AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
        AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
        AppFormPage.IndependentContractors.click({force:true});
        AppFormPage.AllEmailAccounts.click({force:true});
        AppFormPage.ChangePasswordQuarterly.click({force:true});
        AppFormPage.StrongPasswords.click({force:true});
        AppFormPage.PerformCyberSecurityTraining.click({force:true});
        AppFormPage.EOLOrEOSstillInUse.click({force:true});
        AppFormPage.EOLorEOSSegregated.click({force:true});
        AppFormPage.BiometricRecords.click({force:true});
        AppFormPage.PciCompliant.click({force:true});
                                                        // Claims part //
        AppFormPage.AwareOfPossiblePendingClaims.click({force:true});
        AppFormPage.RecentIncidentsAndClaimsAreClosed.click({force:true});
        AppFormPage.DescribtionOfRecentClaims.type('normal');       
        AppFormPage.AmountOfClaims.type('500');
        
                                                // Coverage part //
        // select Effective Date 
        AppFormPage.EffectiveDate.click();
        AppFormPage.scrollToNextMonth.click();
        AppFormPage.SelectedeffectiveDate.click();
        AppFormPage.DataLockLimit.click({force:true});
        AppFormPage.SelectedDataLockLimit.click();
    
        
                                                        // Get a Quate // 
        AppFormPage.GetQuoteButton.click();
        QuoteScreenpage.QuotesHeader.should('be.visible');
        cy.wait(5000)
        QuoteScreenpage.StatusOfmarketReffered.should('be.visible');
    }
}
module.exports=new DatalockReferral()