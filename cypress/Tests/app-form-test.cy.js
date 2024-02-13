//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy.js";
//from 89 to 110 
class AppFormTest{
Addingclaims(){
    AppFormPage.ApplicantName.click().type("Maggie rafat");
    cy.wait(10000);
   
  

    AppFormPage.LocktonOffice.click({force:true});
    cy.wait(5000);

    AppFormPage.SelectLocktonOffice.click();

    

    AppFormPage.LegalCompanyName.type("Company name is confidential");
    cy.wait(10000);

    AppFormPage.TradingName.type("name of the trade is confidential")
    cy.wait(10000);

    AppFormPage.TradeType.click();
    cy.wait(10000);

    AppFormPage.SelectedTradeType.click();
    cy.wait(10000);

    AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
    cy.wait(10000);


   AppFormPage.SuiteUnitFloor.type("Second AB 12");
    cy.wait(10000);

   //  Use the following code if Address data is not populated
    /** 
    AppFormPage.Street.type("Ahmed Abaza St");
    cy.wait(10000);

    AppFormPage.City.type("Alex");
    cy.wait(10000);

    AppFormPage.State.click();
    cy.wait(10000);

    AppFormPage.SelectedState.click();
    cy.wait(10000);

    AppFormPage.ZipCode.type("78596");
    cy.wait(10000);
**/
    AppFormPage.Website.type("www.google.com");
    cy.wait(10000);

    AppFormPage.UseClientDataToggle.click();
    //Sara's Actions
    AppFormPage.ScrollToCity.scrollIntoView();
       cy.wait(5000);
       AppFormPage.BusinessType.click({force:true});
       AppFormPage.SelectBusinessType.click();
       AppFormPage.ScrollToCity.scrollIntoView();
       cy.wait(5000);
       AppFormPage.IndustryType.click();
       cy.wait(5000);
       AppFormPage.SelectIndustryType.click();
       cy.wait(5000);
       AppFormPage.DatalockIndustry.click();
       cy.wait(5000);
       AppFormPage.SelectDatalockIndustry.click();
       cy.wait(5000);
       AppFormPage.BusinessDescription.type('business');
       cy.wait(5000);
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
       cy.wait(5000);
       AppFormPage.NumberOfNonUSEmployees.type('3');
       AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
       AppFormPage.GrossProfitLastFinancialYear.type('1000001');
       cy.wait(5000);
       AppFormPage.NonUSRevenue.click({force:true});
       cy.wait(5000);
       AppFormPage.NonUSRevenueAmount.dblclick().clear();
       cy.wait(5000);
       AppFormPage.NonUSRevenueAmount.type('20');
       AppFormPage.EEARevenue.click();
       AppFormPage.HighRiskTerritories.click();
       AppFormPage.IncludeTRIA.click();
       AppFormPage.ChangeInBusinessActivities.click();
       cy.wait(5000);
       AppFormPage.NonUSRevenue.scrollIntoView();
       cy.wait(5000);
       AppFormPage.TypeOfCoverage.click({force:true});
       cy.wait(5000);
       AppFormPage.SelectCoverage.click();

    //Emad and Zyad added Actions
    AppFormPage.AwareOfPossiblePendingClaims.click();
    cy.wait(5000);
    AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
    cy.wait(5000);
    AppFormPage.NumOfClaims.type('5');
    cy.wait(5000);
    AppFormPage.ExceedingLimit.scrollIntoView();
    AppFormPage.ExceedingLimit.click();
    cy.wait(5000);
    AppFormPage.NatureOflegalAction.click({force:true});
    cy.wait(5000);
    AppFormPage.SelectedNatureOfLegalAction.click();
    cy.wait(5000);
    AppFormPage.DescribtionOfRecentClaims.type('Description');
    AppFormPage.AmountOfClaims.type('1000');
    cy.wait(5000);
    AppFormPage.RemediationFollowingRecentIncidents.click({force:true});
    cy.wait(5000);
    AppFormPage.SelectedRemediation.click();
    cy.wait(5000);
    AppFormPage.CheckAwareOfnewClaims.click();
    AppFormPage.NewClaimsExplanation.type('explanation');
    cy.wait(5000);
    AppFormPage.BbrAdditionalClaim.click();
    AppFormPage.EffectiveDate.click();
    cy.wait(5000);
    AppFormPage.SelectedeffectiveDate.click();
    cy.wait(5000);
    AppFormPage.Beazlyalimit.click({force:true});
    cy.wait(5000);
    AppFormPage.SelectedBeazlylimit.click();
    cy.wait(5000);
    AppFormPage.BeazlyaRetention.click({force:true});
    cy.wait(5000);
    AppFormPage.SelectedBeazlyRetention.click();
    cy.wait(5000);
    AppFormPage.Coalition_Limit_List.click({force:true});
    cy.wait(5000);
    AppFormPage.Select_CoalitionLimit.click({force:true});
    cy.wait(5000);
    AppFormPage.Coalition_Retention_List.click({force:true});

    cy.wait(5000);
    AppFormPage.Select_CoalitionRetention.click({force:true});
    // cy.wait(5000);
    // AppFormPage.AddCrimeCoverage.click();
    cy.wait(5000);
    AppFormPage.AddTechnologyErrorsandOmissions.click();

}
    
}
module.exports=new AppFormTest()