//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy.js";
//from 89 to 110 
class AppFormTest{
Addingclaims(){

    // Maggies's action  from 9 to 24

    // type value in Applicant name 
    AppFormPage.ApplicantName.click().type("Maggie rafat");
    //cy.wait(10000);

    //Selecting a lockton office from the drop down
    AppFormPage.LocktonOffice.click({force:true});
    //cy.wait(5000);
    AppFormPage.SelectLocktonOffice.click();

    
    //Type a value in  Legal company name
    AppFormPage.LegalCompanyName.type("Company name is confidential");
    //cy.wait(10000);

    //Type a value in Trading name
    AppFormPage.TradingName.type("name of the trade is confidential")
    //cy.wait(10000);
     
    //Cathing the  TradeType dropdown
    AppFormPage.TradeType.click();
    //cy.wait(10000);

    //Select a value from  TradeType dropdown
    AppFormPage.SelectedTradeType.click();
    //cy.wait(10000);

    // Type a value in the address field
    AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
    //cy.wait(10000);

   // Type a value in Suite/Unit/Floor field
   //AppFormPage.SuiteUnitFloor.type("Second AB 12");
    //cy.wait(10000);

   //  Use the following code if Address data is not populated
    /** 
     
    // Type value in street field
    AppFormPage.Street.type("Ahmed Abaza St");
    //cy.wait(10000);

    // Type value in City field
    AppFormPage.City.type("Alex");
    //cy.wait(10000);

    // Catching State Field
    AppFormPage.State.click();
    //cy.wait(10000);

    // Select a state from the dropdown
    AppFormPage.SelectedState.click();
    //cy.wait(10000);

    // Type a value in ZipCode Field
    AppFormPage.ZipCode.type("78596");
    //cy.wait(10000);
**/

    // Type a value in Website field
    AppFormPage.Website.type("www.google.com");
    //cy.wait(10000);

    // Enable Use Client data toggle
    AppFormPage.UseClientDataToggle.click();



    //Sara's Actions from  25 to 49
    AppFormPage.ScrollToCity.scrollIntoView();
       //cy.wait(5000);
       AppFormPage.BusinessType.click({force:true});
       AppFormPage.SelectBusinessType.click();
       AppFormPage.ScrollToCity.scrollIntoView();
       //cy.wait(5000);
       AppFormPage.IndustryType.click();
       //cy.wait(5000);
       AppFormPage.SelectIndustryType.click();
       //cy.wait(5000);
       AppFormPage.DatalockIndustry.click();
       //cy.wait(5000);
       AppFormPage.SelectDatalockIndustry.click();
       //cy.wait(5000);
       AppFormPage.BusinessDescription.type('business');
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
       AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
       //cy.wait(5000);
       AppFormPage.NumberOfNonUSEmployees.type('3');
       AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
       AppFormPage.GrossProfitLastFinancialYear.type('1000001');
       //cy.wait(5000);
       AppFormPage.NonUSRevenue.click({force:true});
       //cy.wait(5000);
       AppFormPage.NonUSRevenueAmount.dblclick().clear();
       //cy.wait(5000);
       AppFormPage.NonUSRevenueAmount.type('20');
       AppFormPage.EEARevenue.click();
       AppFormPage.HighRiskTerritories.click();
       AppFormPage.IncludeTRIA.click();
       AppFormPage.ChangeInBusinessActivities.click();
       //cy.wait(5000);
       AppFormPage.NonUSRevenue.scrollIntoView();
       //cy.wait(5000);
       AppFormPage.TypeOfCoverage.click({force:true});
       //cy.wait(5000);
       AppFormPage.SelectCoverage.click();
// Morine's Actions  
AppFormPage.PersonallyIdentifiableInfo.click({force :true});
        //cy.wait(5000);
        AppFormPage.EstimatePersonallyIdentifiableInfo.type(45);
        AppFormPage.MedicalRecords.click({force:true});
        AppFormPage.FinancialInformation.click();
        AppFormPage.EstimateFinancialInformation.type(25);
         AppFormPage.DriverLicenseNumber.click({force:true});
         //cy.wait(5000);
        AppFormPage.EstimateDriverLicense.type(10);
        AppFormPage.SocialSecurity.click();
        AppFormPage.PCIinformation.click();
        AppFormPage.PerformsRegularBackups.click();
        AppFormPage.ProtectBackups.click();
        AppFormPage.EmailFiltering.click();
        AppFormPage.AccessWebBasedEmail.click();
        AppFormPage.AntiVirus.click();
        AppFormPage.Encryption.click();
        AppFormPage.DownloadedToPortableDevices.click();
        AppFormPage.CriticalPatching.click();
    //Emad and Zyad added Actions from 89 to 123
    AppFormPage.AwareOfPossiblePendingClaims.click();
    //cy.wait(5000);
    AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
    //cy.wait(5000);
    AppFormPage.NumOfClaims.type('5');
    //cy.wait(5000);
    AppFormPage.ExceedingLimit.scrollIntoView();
    AppFormPage.ExceedingLimit.click();
    //cy.wait(5000);
    AppFormPage.NatureOflegalAction.click({force:true});
    //cy.wait(5000);
    AppFormPage.SelectedNatureOfLegalAction.click();
    //cy.wait(5000);
    AppFormPage.DescribtionOfRecentClaims.type('Description');
    AppFormPage.AmountOfClaims.type('1000');
    //cy.wait(5000);
    AppFormPage.RemediationFollowingRecentIncidents.click({force:true});
    //cy.wait(5000);
    AppFormPage.SelectedRemediation.click();
    //cy.wait(5000);
    AppFormPage.CheckAwareOfnewClaims.click();
    AppFormPage.NewClaimsExplanation.type('explanation');
    //cy.wait(5000);
    AppFormPage.BbrAdditionalClaim.click();
    AppFormPage.EffectiveDate.click();
    //cy.wait(5000);
    AppFormPage.SelectedeffectiveDate.click();
    //cy.wait(5000);
    AppFormPage.Beazlyalimit.click({force:true});
    //cy.wait(5000);
    AppFormPage.SelectedBeazlylimit.click();
    //cy.wait(5000);
    AppFormPage.BeazlyaRetention.click({force:true});
    //cy.wait(5000);
    AppFormPage.SelectedBeazlyRetention.click();
    //cy.wait(5000);
    AppFormPage.Coalition_Limit_List.click({force:true});
    //cy.wait(5000);
    AppFormPage.Select_CoalitionLimit.click({force:true});
    //cy.wait(5000);
    AppFormPage.Coalition_Retention_List.click({force:true});

    //cy.wait(5000);
    AppFormPage.Select_CoalitionRetention.click({force:true});
    // //cy.wait(5000);
    // AppFormPage.AddCrimeCoverage.click();
    //cy.wait(5000);
    AppFormPage.AddTechnologyErrorsandOmissions.click();

}
    
}
module.exports=new AppFormTest()