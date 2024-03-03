
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
       
        AppFormPage.AccessWebBasedEmail.click();

        AppFormPage.CriticalPatching.click();
        AppFormPage.InfringementOfCopyright.click();
        AppFormPage.InfringementOfTrademark.click();
        AppFormPage.LibelOrSlander.click();
        //AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
        //AppFormPage.DescribtionOfRecentClaims.type("test");
        //AppFormPage.AmountOfClaims.type("100000");
        AppFormPage.DownloadedToPortableDevices.click();
        AppFormPage.EffectiveDate.click();
        AppFormPage.SelectedeffectiveDate.click();
        AppFormPage.PersonallyIdentifiableInfo.click({force:true});
        AppFormPage.MedicalRecords.click({force:true});
        AppFormPage.FinancialInformation.click({force:true});
        AppFormPage.DriverLicenseNumber.click({force:true});
        AppFormPage.SocialSecurity.click({force:true});
        AppFormPage.PCIinformation.click({force:true});
        AppFormPage.RemoteNetworkAccess.click({force:true});
        AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
        AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
        AppFormPage.IndependentContractors.click({force:true});
        AppFormPage.AllEmailAccounts.click({force:true});
        AppFormPage.ChangePasswordQuarterly.click({force:true});
        AppFormPage.StrongPasswords.click({force:true});
        AppFormPage.TakedownProcedures.click({force:true});


       //AppFormPage.Datalocklimit.click({force:true});
       //AppFormPage.SelectedDatalocklimit.click({force:true});

        AppFormPage.Beazlyalimit.click({force:true});
        AppFormPage.SelectedBeazlylimit.click({force:true});

        AppFormPage.BeazlyaRetention.click({force:true});
        AppFormPage.SelectedBeazlyRetention.click({force:true});




        AppFormPage.GetAquoteButton.click();
    }
  

  
}









module.exports = new DatalockandBBRQuote() ;