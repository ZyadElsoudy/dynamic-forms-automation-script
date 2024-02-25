
import AppFormPage from "../Pages/app-form-page.cy.js";

 
class DatalockandBBRQuote{
    DatalockAndBBR(){

        AppFormPage.RemoveCoalition.click();
        
        AppFormPage.RemoveCFC.click();

        AppFormPage.RemoveEverest.click();

        AppFormPage.LegalCompanyName.type("Company name is confidential");

        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
 
        AppFormPage.Website.type("www.google.com");

        AppFormPage.UseClientDataToggle.click();

        AppFormPage.IndustryType.click();
      
        AppFormPage.SelectIndustryType.click();
      
        AppFormPage.DatalockIndustry.click();
      
        AppFormPage.SelectDatalockIndustry.click();
 ``     
        AppFormPage.BusinessDescription.type('business');

        AppFormPage.NumberOfEmployees.type('3');

        AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
       
        AppFormPage.NumberOfNonUSEmployees.type('3');

        AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');

        AppFormPage.NonUSRevenue.click({force:true});

        AppFormPage.ChangeInBusinessActivities.click();
  
        //to be checked 
        AppFormPage.PersonallyIdentifiableInfo.click();
        AppFormPage.MedicalRecords.click();
        AppFormPage.FinancialInformation.click();
        AppFormPage.DriverLicenseNumber.click();
        AppFormPage.SocialSecurity.click();
        AppFormPage.PCIinformation.click();
        AppFormPage.AccessWebBasedEmail.click();
        AppFormPage.DownloadedToPortableDevices.click();
        AppFormPage.CriticalPatching.click();
    }
  

  
}









module.exports = new DatalockandBBRQuote() ;