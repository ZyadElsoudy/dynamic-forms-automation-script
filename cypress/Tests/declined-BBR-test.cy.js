import AppFormPage from "../Pages/app-form-page.cy.js";
class DeclinedBBRRequest{
    SubmitBBRDecRequest(){
        AppFormPage.RemoveDatalock.click();
        AppFormPage.RemoveCoalition.click();
        AppFormPage.RemoveCFC.click();
        AppFormPage.RemoveEverest.click();  
        AppFormPage.ApplicantName.click().type("Maggie rafat");
    
        //Type a value in  Legal company name
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        //cy.wait(10000);
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        // Type a value in Website field
        AppFormPage.Website.type("www.google.com");
        
        //cy.wait(10000);
           AppFormPage.UseClientDataToggle.click();
           AppFormPage.ScrollToCity.scrollIntoView();
           cy.wait(5000);
           AppFormPage.IndustryType.click();
           cy.wait(5000);
           AppFormPage.SelectIndustryType.click();
           //cy.wait(5000);
           AppFormPage.AdultContent.click();
           AppFormPage.Cannabis.click();
           AppFormPage.CareProvider.click();
           AppFormPage.CryptocurrencyOrBlockchain.click();
           AppFormPage.DataProcessing.click();
           AppFormPage.DebtCollection.click();
           AppFormPage.Gambling.click();
           AppFormPage.PaymentProcessingn.click();
           AppFormPage.StorageHosting.click();
           AppFormPage.NumberOfEmployees.type('3');
           AppFormPage.NumberOfNonUSEmployees.dblclick().clear().type('54');

           AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');           //cy.wait(5000);
           AppFormPage.NonUSRevenue.click({force:true});
           cy.wait(5000);
           AppFormPage.NonUSRevenueAmount.dblclick().clear().type('22');
           AppFormPage.ChangeInBusinessActivities.click();
           AppFormPage.PerformsRegularBackups.click();
           AppFormPage.EmailFiltering.click();
           AppFormPage.AccessWebBasedEmail.click();
           AppFormPage.AntiVirus.click();
           AppFormPage.CriticalPatching.click();
           AppFormPage.RemoteNetworkAccess.click();
           AppFormPage.AdministratorAndPrivilegedAccounts.click();
           AppFormPage.ExternalRemoteDesktopProtocols.click();
           AppFormPage.IndependentContractors.click();
           AppFormPage.AllEmailAccounts.click();
           AppFormPage.PerformCyberSecurityTraining.click();
           AppFormPage.FundsTransferDualControl.click();
           AppFormPage.SelectionYesAllPayment.click();
           AppFormPage.TakedownProcedures.click();
           AppFormPage.FormalReviewBroadcast.click();
           AppFormPage.FormalReviewSupervised.click();
           AppFormPage.AwareOfPossiblePendingClaims.click();
           AppFormPage.BbrAdditionalClaim.click();
           AppFormPage.EffectiveDate.click();
           //cy.wait(5000);
           AppFormPage.SelectedeffectiveDate.click();

           AppFormPage.Beazlyalimit.click({force:true});
           //cy.wait(5000);
           AppFormPage.SelectedBeazlylimit.click();
           //cy.wait(5000);
           AppFormPage.BeazlyaRetention.click({force:true});
           //cy.wait(5000);
           AppFormPage.SelectedBeazlyRetention.click();
           AppFormPage.GetQuoteButton.click();


    }
}
       

module.exports=new DeclinedBBRRequest();