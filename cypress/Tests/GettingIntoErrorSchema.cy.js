// Importing the Element File to Use the LOcators Here
import AppFormPage from "../Pages/app-form-page.cy.js";

 
class TriggerErrorSchema{
   
    ErrorSchema(){
        AppFormPage.ApplicantName.click().type("Maggie rafat");
       
        //Selecting a lockton office from the drop down
        AppFormPage.LocktonOffice.click({force:true});
        AppFormPage.SelectLocktonOffice.click();
   
        //Type a value in  Legal company name
        AppFormPage.LegalCompanyName.type("Company name is confidential");
       
        // Enable Use Client data toggle
        AppFormPage.UseClientDataToggle.click();
         
 
        AppFormPage.BusinessDescription.type('business');
        
        AppFormPage.GetAquoteButton.click();
 
    }
 
 }
 
 module.exports = new TriggerErrorSchema() ;