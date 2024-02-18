// Importing the Element File to Use the LOcators Here 
import AppFormPage from "../Pages/app-form-page.cy.js";

class TriggerErrorSchema{
   
    ErrorSchema(){
        AppFormPage.ApplicantName.click().type("Maggie rafat");
        cy.wait(10000);
    
        //Selecting a lockton office from the drop down
        AppFormPage.LocktonOffice.click({force:true});
        cy.wait(5000);
        AppFormPage.SelectLocktonOffice.click();
    
        
        //Type a value in  Legal company name
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        cy.wait(10000);

    }

 }

 module.exports = new TriggerErrorSchema() ;
