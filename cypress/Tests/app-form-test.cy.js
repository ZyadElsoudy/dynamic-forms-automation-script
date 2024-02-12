//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy";

class AppFormTest{
    ApplicantSection(){


       //AppFormPage.AssociateEmaileAddresss.click();
        //Cy.wait(10000);

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

    }
   
}

module.exports=new AppFormTest();
