//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy.js"; 

class AppFormTest{
    Addingclaims(){
        

       AppFormPage.scrollSaraSec.scrollIntoView();
       cy.wait(5000);
       AppFormPage.BusinessType.click({force:true});
       AppFormPage.SelectBusinessType.click();
       AppFormPage.scrollSaraSec.scrollIntoView();
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
       AppFormPage.NonUSRevenue.click();
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


    }


    
}
module.exports=new AppFormTest();