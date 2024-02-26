// import cypress from "cypress";
import AppFormPage from "../Pages/app-form-page.cy";

class EverestAndBbrRequestTest{
    SubmitEverestAndBbrRequest(){
        AppFormPage.jumpToApplicantSection();
        cy.wait(5000);
            AppFormPage.CloseDataLock.click();
            AppFormPage.CloseCoalition.click();
            AppFormPage.CloseCFC.click();
            // Filter
            // AppFormPage.Filter.type('Name');
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
            AppFormPage.NonUSRevenue.click({force:true});
            AppFormPage.NonUSRevenueAmount.type('20,000');
            AppFormPage.ChangeInBusinessActivities.click();
            AppFormPage.PersonallyIdentifiableInfo.click();
            AppFormPage.EstimatePersonallyIdentifiableInfo.type(45);
            AppFormPage.MedicalRecords.click({force:true});
            AppFormPage.FinancialInformation.click();
            AppFormPage.EstimateFinancialInformation.type(25);
            AppFormPage.DriverLicenseNumber.click({force:true});
            AppFormPage.EstimateDriverLicense.type(10);
            AppFormPage.SocialSecurity.click({force:true});
            AppFormPage.PCIinformation.click({force:true});
            AppFormPage.PerformsRegularBackups.click({force:true});
            AppFormPage.EmailFiltering.click({force:true});
            AppFormPage.AccessWebBasedEmail.click({force:true});
            AppFormPage.AntiVirus.click({force:true});
            AppFormPage.CriticalPatching.click({force:true});   
            AppFormPage.RemoteNetworkAccess.click({force:true});
            AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
            AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
            AppFormPage.IndependentContractors.click({force:true});
            AppFormPage.AllEmailAccounts.click({force:true});
            AppFormPage.PerformCyberSecurityTraining.click({force:true});
            AppFormPage.TakedownProcedures.click({force:true});
            AppFormPage.FormalReviewBroadcast.click({force:true});
            AppFormPage.AwareOfPossiblePendingClaims.click({force:true});
            AppFormPage.RecentIncidentsAndClaimsAreClosed.click({force:true});
            AppFormPage.BbrAdditionalClaim.click({force:true});
            AppFormPage.EffectiveDate.click({force:true});
            AppFormPage.SelectedeffectiveDate.click({force:true});
            AppFormPage.Beazlyalimit.click({force:true});
            AppFormPage.SelectedBeazlylimit.click();
            AppFormPage.BeazlyaRetention.click({force:true});   
            AppFormPage.SelectedBeazlyRetention.click();
            AppFormPage.AddTechnologyErrorsandOmissions.click({force:true});
            AppFormPage.GetQuoteButton.click();

            


    }
    
    }


  

module.exports = new EverestAndBbrRequestTest();