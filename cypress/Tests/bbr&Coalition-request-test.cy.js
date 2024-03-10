import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
class BBRColitionRequestTest{

    SubmitBBRColition(){
        AppFormPage.jumpToApplicantSection.click();
        cy.wait(5000)
        AppFormPage.CloseDataLock.click();
        AppFormPage.CloseCFC.click();
        AppFormPage.CloseEverest.click();
         
                                                    //Applicant Part//
        AppFormPage.ApplicantName.type("Menna");
        //Type a value in  Legal company name
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        // Type a value in the address field
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        AppFormPage.Website.type("www.google.com");
        AppFormPage.UseClientDataToggle.click({force:true});
        AppFormPage.IndustryType.click();
        AppFormPage.NumberOfEmployees.type('3');
        AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
        //add new number of Number of Non US Employees
        AppFormPage.NumberOfNonUSEmployees.type('3');
        AppFormPage.AnnualRevenueLastFinancialYear.type('200000');
        AppFormPage.GrossProfitLastFinancialYear.type('300000');
        AppFormPage.NonUSRevenue.click();
        AppFormPage.ChangeInBusinessActivities.click();
        AppFormPage.TypeOfCoverage.click({force:true});
        AppFormPage.SelectCoverage.click();
                                                      // Cyber Risk part //
        AppFormPage.PersonallyIdentifiableInfo.click();
        AppFormPage.EstimatePersonallyIdentifiableInfo.type('30');
        AppFormPage.MedicalRecords.click({force:true});
        AppFormPage.EstimateMedicalRecords.type('10');
        AppFormPage.FinancialInformation.click({force:true});
        AppFormPage.EstimateFinancialInformation.type('10');
        AppFormPage.DriverLicenseNumber.click({force:true});
        AppFormPage.EstimateDriverLicense.type('2');
        AppFormPage.SocialSecurity.click({force:true});
        AppFormPage.PCIinformation.click({force:true});
        AppFormPage.PerformsRegularBackups.click({force:true});
        AppFormPage.EmailFiltering.click({force:true});
        AppFormPage.AccessWebBasedEmail.click({force:true});
        AppFormPage.AntiVirus.click({force:true});
        AppFormPage.Encryption.click({force:true});
        AppFormPage.CriticalPatching.click({force:true});
        AppFormPage.RemoteNetworkAccess.click({force:true});
        AppFormPage.VPN.click({force:true});
        AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
        AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
        AppFormPage.IndependentContractors.click({force:true});
        AppFormPage.AllEmailAccounts.click({force:true});
        AppFormPage.PerformCyberSecurityTraining.click({force:true});
        AppFormPage.PciCompliant.click({force:true});
        AppFormPage.AdministrativeDualControl.click({force:true});
        AppFormPage.TakedownProcedures.click({force:true});
        AppFormPage.FormalReviewBroadcast.click({force:true});
                                                       // Claims part //
        AppFormPage.AwareOfPossiblePendingClaims.click({force:true});
        AppFormPage.NumOfClaims.type('2');
        AppFormPage.ExceedingLimit.click({force:true});
        AppFormPage.DescribtionOfRecentClaims.type('normal');       
        AppFormPage.AmountOfClaims.type('500');
        AppFormPage.CheckAwareOfnewClaims.click({force:true});
        AppFormPage.NewClaimsExplanation.type('normal');
        AppFormPage.BbrAdditionalClaim.click({force:true});
                                                // Coverage part //
        // select Effective Date 
        AppFormPage.EffectiveDate.click();
        AppFormPage.scrollToNextMonth.click();
        AppFormPage.SelectedeffectiveDate.click();
        // select Beazly Limit with value $ 3,000,000
        AppFormPage.Beazlyalimit.click({force:true});
        AppFormPage.SelectedBeazlylimit.click();
        // select Beazly Retention with value $ 50,000
        AppFormPage.BeazlyaRetention.click({force:true});
        AppFormPage.SelectedBeazlyRetention.click();
        // select Coalition_Limit_List with value $ 50,000
        AppFormPage.Coalition_Limit_List.click({force:true});
        AppFormPage.Select_CoalitionLimit.click();
        AppFormPage.Coalition_Retention_List.click({force:true});
        AppFormPage.Select_CoalitionRetention.click();
                                                        // Get a Quate // 
        AppFormPage.GetQuoteButton.click();
        QuoteScreenpage.QuotesHeader.should('be.visible');
        cy.wait(5000)
        QuoteScreenpage.StatusOfmarketReffered.should('be.visible');
    }
}
module.exports=new BBRColitionRequestTest()