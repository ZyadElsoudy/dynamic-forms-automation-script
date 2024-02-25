import AppFormPage from "../Pages/app-form-page.cy";

class CoalitionRequestTest{
    SubmitCoalitionRequest(){
        AppFormPage.CloseDatalock.click();
        AppFormPage.CloseBBR.click();
        AppFormPage.CloseCFC.click();
        AppFormPage.CloseEverest.click();
        AppFormPage.ApplicantName.type('Morine');
        AppFormPage.LegalCompanyName.type('Company name is confidential');
        AppFormPage.SearchForAddress.type('123 William St, New York, NY 10038, USA{enter}');
        AppFormPage.Website.type("www.google.com");
        cy.wait(1000);
        AppFormPage.UseClientDataToggle.click();
        AppFormPage.IndustryType.click();
        AppFormPage.SelectIndustryType.click();
        AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
        AppFormPage.GrossProfitLastFinancialYear.type('1000001');
        AppFormPage.TypeOfCoverage.click({force:true});
        AppFormPage.SelectCoverage.click();
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
        AppFormPage.RemoteNetworkAccess.click({force:true});
       AppFormPage.RemoteNetworkAccess.click({force:true});
       AppFormPage.AdministratorAndPrivilegedAccounts.click({force:true});
       AppFormPage.ExternalRemoteDesktopProtocols.click({force:true});
       AppFormPage.IndependentContractors.click({force:true});
       AppFormPage.AllEmailAccounts.click({force:true});
       AppFormPage.PciCompliant.click();
       AppFormPage.AdministrativeDualControl.click();
       AppFormPage.EffectiveDate.click();
       AppFormPage.SelectedeffectiveDate.click();
       AppFormPage.Coalition_Limit_List.click({force:true});
       AppFormPage.Select_CoalitionLimit.click({force:true});
       AppFormPage.Coalition_Retention_List.click({force:true});
       AppFormPage.Select_CoalitionRetention.click({force:true});
       AppFormPage.GetQuote.click();
       AppFormPage.QuoteDeclined;
    }
}

module.exports = new CoalitionRequestTest();