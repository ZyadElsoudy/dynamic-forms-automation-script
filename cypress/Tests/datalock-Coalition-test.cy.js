import AppFormPage from '../Pages/app-form-page.cy.js';

class datalockAndCoalition {
  SubmitDatalockAndCoalition() {
    AppFormPage.jumpToApplicantSection.click();
    cy.wait(5000);
    AppFormPage.CloseBBR.click();
    AppFormPage.CloseCFC.click();
    AppFormPage.CloseEverest.click();
    AppFormPage.ApplicantName.click().type('Maggie rafat');

    // Type a value in  Legal company name
    AppFormPage.LegalCompanyName.type('Company name is confidential');
    AppFormPage.SearchForAddress.type('123 William St, New York, NY 10038, USA{enter}');
    // cy.wait(10000);
    // Type a value in Website field
    AppFormPage.Website.type('www.google.com');
    // cy.wait(10000);
    AppFormPage.UseClientDataToggle.click({ force: true });
    AppFormPage.ScrollToCity.scrollIntoView();
    AppFormPage.IndustryType.click({ force: true });
    // cy.wait(5000);
    AppFormPage.SelectIndustryType.click();
    AppFormPage.DatalockIndustry.click();
    AppFormPage.SelectDatalockIndustry.click();
    // cy.wait(5000);
    AppFormPage.BusinessDescription.type('business');
    // cy.wait(5000);
    AppFormPage.AdultContent.click();
    AppFormPage.CryptocurrencyOrBlockchain.click();
    AppFormPage.Gambling.click();
    AppFormPage.PaymentProcessingn.click();
    AppFormPage.StorageHosting.click();
    AppFormPage.NumberOfEmployees.type('3');
    AppFormPage.AnnualRevenueLastFinancialYear.type('1000000');
    AppFormPage.GrossProfitLastFinancialYear.type('1000001');
    // cy.wait(5000);
    AppFormPage.NonUSRevenue.click({ force: true });
    // cy.wait(5000);
    AppFormPage.EEARevenue.click();
    AppFormPage.HighRiskTerritories.click();
    AppFormPage.IncludeTRIA.click();
    // cy.wait(5000);
    AppFormPage.NonUSRevenue.scrollIntoView();
    // cy.wait(5000);
    AppFormPage.TypeOfCoverage.click({ force: true });
    // cy.wait(5000);
    AppFormPage.SelectCoverage.click();
    AppFormPage.JumpToCyberRiskSection.click();
    AppFormPage.PersonallyIdentifiableInfo.click({ force: true });
    AppFormPage.EstimatePersonallyIdentifiableInfo.type(45);
    AppFormPage.MedicalRecords.click({ force: true });
    AppFormPage.EstimateMedicalRecords.type(45);
    AppFormPage.FinancialInformation.click({ force: true });
    AppFormPage.EstimateFinancialInformation.type(25);
    AppFormPage.DriverLicenseNumber.click({ force: true });
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
    // Menna's Aections from 70 to 88
    // Select Remote Network Access
    AppFormPage.RemoteNetworkAccess.click();
    // Select Virtual Private Network (VPN) (Yes)
    AppFormPage.VPN.click();
    // Select Administrator and Privileged accounts -> selection No
    AppFormPage.AdministratorAndPrivilegedAccounts.click();
    // Select External Remote Desktop Protocol -> selection No
    AppFormPage.ExternalRemoteDesktopProtocols.click();
    // Select Independent contractors and vendors accessing the network -> selection No
    AppFormPage.IndependentContractors.click();
    // Select All email accounts -> selection Yes
    AppFormPage.AllEmailAccounts.click();
    // Select Change Password Quarterly -> selection Yes
    AppFormPage.ChangePasswordQuarterly.click();
    // Select Strong Passwords -> selection Yes
    AppFormPage.StrongPasswords.click();
    // Select Perform Cyber Security Training -> selection Yes
    AppFormPage.PerformCyberSecurityTraining.click();
    // Select EOL or EOS Software still in-use -> selection Yes
    AppFormPage.EOLOrEOSstillInUse.click();
    // Select EOL or EOS Software is segregated -> selection Yes
    AppFormPage.EOLorEOSSegregated.click();
    // Select Biometric Records -> selection Yes
    AppFormPage.BiometricRecords.click();
    // Select Applicant Is PCI Compliant -> selection Yes
    AppFormPage.PciCompliant.click();
    // Select Administrative Dual Control -> selection Yes
    AppFormPage.AdministrativeDualControl.click();
    // Select Infringement of copyright  -> selection Yes
    AppFormPage.InfringementOfCopyright.click();
    // Select Infringement of trademark  -> selection Yes
    AppFormPage.InfringementOfTrademark.click();
    // Select Libel or slander  -> selection Yes
    AppFormPage.LibelOrSlander.click();
    // Select Formal Review Supervised  -> selection Yes
    // End of Menna's Aection from 70 to 88
    // Emad and Zyad added Actions from 89 to 123
    AppFormPage.AwareOfPossiblePendingClaims.click();
    // cy.wait(5000);
    AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
    AppFormPage.NumOfClaims.type('5');
    AppFormPage.ExceedingLimit.scrollIntoView();
    // cy.wait(5000);
    AppFormPage.ExceedingLimit.click();
    AppFormPage.DescribtionOfRecentClaims.type('Description');
    AppFormPage.AmountOfClaims.type('1000');
    // cy.wait(5000);
    AppFormPage.EffectiveDate.click();
    AppFormPage.scrollToNextMonth.click();
    AppFormPage.SelectedeffectiveDate.click();
    AppFormPage.Coalition_Limit_List.click({ force: true });
    AppFormPage.Select_CoalitionLimit.click({ force: true });
    AppFormPage.Coalition_Retention_List.click({ force: true });
    AppFormPage.Select_CoalitionRetention.click({ force: true });
    AppFormPage.DataLockLimit.click({ force: true });
    AppFormPage.SelectedDataLockLimit.click();
    AppFormPage.GetQuoteButton.click();
  }
}
module.exports = new datalockAndCoalition();
