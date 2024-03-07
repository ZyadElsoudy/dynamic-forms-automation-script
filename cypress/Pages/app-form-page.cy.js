class AppFormPage {
  // Remove Datalock market
  g;

  get jumpToApplicantSection() {
    return cy.get('button[class="tru-button link "]').contains('Applicant');
  }

  get CloseDataLock() {
    return cy.get('button[id="close-datalock"][class="tru-button default remove-tag"]').eq(0);
  }

  get CloseDataLockIcon() {
    return cy.get('button[id="close-datalock"][class="tru-button default remove-tag"]').eq(0);
  }

  get CloseBBR() {
    return cy.get('button[id="close-bbr"][class="tru-button default remove-tag"]').eq(0);
  }

  get CloseCoallition() {
    return cy.get('button[id=close-coalition][class="tru-button default remove-tag"]').eq(0);
  }

  get CloseCFC() {
    return cy.get('button[id="close-cfc"][class="tru-button default remove-tag"]').eq(0);
  }

  get CloseEverest() {
    return cy.get('button[id="close-everest"][class="tru-button default remove-tag"]').eq(0);
  }

  get ApplicantName() { return cy.get('input[type="text"][placeholder="Associate Name"]'); }

  // geeting lockton office
  get LocktonOffice() { return cy.get('span.ant-select-selection-placeholder').contains('Lockton Office'); }

  // Selecting a lockton office from the drop down
  get SelectLocktonOffice() {
    return cy.get('.ant-select-item-option-content').contains('Los Angeles');
  }

  // Selecting Legal company name
  get LegalCompanyName() { return cy.get('input[type="text"][placeholder="Legal Company name"]'); }

  // selecting Trading name
  get TradingName() { return cy.get('input[type="text"][placeholder="Trading Name (if different)"]'); }

  // Selecting TradeType
  get TradeType() { return cy.get('[path="applicant.everest.tradeType"] > .tru-form-item'); }

  // Select a value from  TradeType dropdown
  get SelectedTradeType() { return cy.get('[path="applicant.everest.tradeType"] > .tru-form-item').contains('Also Known As'); }

  // Selecting Address Field
  get SearchForAddress() { return cy.get('.location-search-wrapper'); }

  // Selecting Suite/Unit/Floor field
  get SuiteUnitFloor() { return cy.get('input[type="text"][placeholder="Suite/Unit/Floor Etc."]'); }

  // The following fields are auto filled with address
  /**

        // Getting Street Field
    get Street() {return cy.get('input[type="text"][placeholder="Street"]')}

        // Getting City Field
    get City() {return cy.get('input[type="text"][placeholder="City"]')}

        // Getting State Field
    get State () { return cy.get('#rc_select_13') }

       // Select a state from the dropdown
    get SelectedState() { return cy.get('#rc_select_13').contains("Denver") }

       // Getting Zipcode fields
    get ZipCode() {return cy.get('input[type="text"][placeholder="Zip Code"]')}
    * */

  // Select Website field
  get Website() { return cy.get('input[type="text"][placeholder="Website"]'); }

  // Select Use Client data toggle
  get UseClientDataToggle() { return cy.get('[path="applicant.shared.sameAsClient"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch'); }

  get CliantContactName() { return cy.get('input[placeholder="Client Contact Name"]'); }

  get CliantEmailAdress() { return cy.get('input[placeholder="Client Email Address]'); }

  get CliantContactName() { return cy.get('input[placeholder="Client Contact Name"]'); }

  // Sara's Section
  // scroll to city field
  get ScrollToCity() { return cy.get('[path="applicant.shared.city"] > .tru-form-item'); }

  // getting Business Type
  get BusinessType() { return cy.get('span.ant-select-selection-placeholder').contains('Business Type'); }

  // getting select business type
  get SelectBusinessType() { return cy.get('.ant-select-item-option-content').contains('Individual'); }

  // getting industry Type
  get IndustryType() { return cy.get('[path="applicant.shared.industryType"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector'); }

  // getting select industry type
  get SelectIndustryType() { return cy.get('.ant-select-item-option-content').contains('Administration of Education Programs'); }

  // getting Datalock Industry
  get DatalockIndustry() { return cy.get('[path="applicant.datalock.industryName"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector'); }

  // getting select Datalock Industry
  get SelectDatalockIndustry() { return cy.get('.ant-select-item-option-content').contains('Agriculture'); }

  // getting Business Description
  get BusinessDescription() { return cy.get('textarea[class="tru-textarea"][placeholder="Business Description"]'); }

  // getting Adult Content
  get AdultContent() { return cy.get('[path="coverage.shared.engagedIndustries.adult"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Cannabis
  get Cannabis() { return cy.get('[path="coverage.shared.engagedIndustries.cannabis"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting care provider
  get CareProvider() { return cy.get('[path="coverage.shared.engagedIndustries.careProvider"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Cryptocurrency or Blockchain
  get CryptocurrencyOrBlockchain() { return cy.get('[path="coverage.shared.engagedIndustries.cryptoCurrency"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting data Processing
  get DataProcessing() { return cy.get('[path="coverage.shared.engagedIndustries.dataProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Debt Collection
  get DebtCollection() { return cy.get('[path="coverage.shared.engagedIndustries.debtCollection"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Gambling
  get Gambling() { return cy.get('[path="coverage.shared.engagedIndustries.gambling"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Payment Processing
  get PaymentProcessingn() { return cy.get('[path="coverage.shared.engagedIndustries.paymentProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Storage Hosting
  get StorageHosting() { return cy.get('[path="coverage.shared.engagedIndustries.storageHosting"] >.tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider'); }

  // getting Number Of Employees
  get NumberOfEmployees() { return cy.get('input[type="number"][placeholder="Number Of Employees"]'); }

  // getting Number of Non US Employees
  get NumberOfNonUSEmployees() { return cy.get('input[type="number"][placeholder="Number of Non US Employees"]'); }

  // getting Annual Revenue for the last complete financial year $
  get AnnualRevenueLastFinancialYear() { return cy.get('input[type="text"][placeholder="Annual Revenue for the last complete financial year $"]'); }

  // getting Gross Profit for the last complete financial year $
  get GrossProfitLastFinancialYear() { return cy.get('input[type="text"][placeholder="Gross Profit for the last complete financial year $"]'); }

  // getting Non US Revenue
  get NonUSRevenue() { return cy.get('input[type="radio"][name="applicant.shared.globalRevenue"]').eq(0); }

  // getting Non US Revenue Percentage (%)
  get NonUSRevenueAmount() { return cy.get('input.tru-number-input[placeholder="Non US Revenue Percentage (%)"]'); }

  // getting EEA Revenue
  get EEARevenue() { return cy.get('input[type="radio"][name="applicant.datalock.eeaRevenue"]').eq(0); }

  // getting High Risk Territories
  get HighRiskTerritories() { return cy.get('input[type="radio"][name="applicant.datalock.highRiskTerritories"]').eq(1); }

  // getting Include TRIA
  get IncludeTRIA() { return cy.get('input[type="radio"][name="applicant.datalock.includeTria"]').eq(1); }

  // getting Change in Business Activities
  get ChangeInBusinessActivities() { return cy.get('input[type="radio"][name="applicant.bbr.mergerAcquisition"]').eq(1); }

  // getting Type of Coverage
  get TypeOfCoverage() { return cy.get('span.ant-select-selection-placeholder').contains('Type of Coverage'); }

  // getting select addmitted Type of Coverage
  get SelectCoverage() { return cy.get('.ant-select-item-option-content').contains('ADMITTED'); }

  // End of sara's section
  get JumpToCyberRiskSection() {
    return cy.get('button[class="tru-button link "]').contains('Cyber Risk');
  }

  get PersonallyIdentifiableInfo() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.personallyIdentifiableInformation"]').eq(0);
  }

  get EstimatePersonallyIdentifiableInfo() {
    return cy.get('input.tru-number-input[placeholder="Estimate"]');
  }

  // "Medical records" field
  get MedicalRecords() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.medicalRecords"]').eq(0);
  }

  // Estimate Medical Records
  get EstimateMedicalRecords() {
    return cy.get('input[class="tru-number-input"][placeholder="Estimate"]').eq(1);
  }

  // "Financial information" field
  get FinancialInformation() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.financialInformation"]').eq(0);
  }

  get EstimateFinancialInformation() {
    return cy.get('[path="cyberRisk.shared.numberOfFinancialInformation"]');
  }

  // "Driver license numbers" field
  get DriverLicenseNumber() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.driverLicence"]').eq(0);
  }

  get EstimateDriverLicense() {
    return cy.get('[path="cyberRisk.shared.numberOfDriverLicence"]');
  }

  // "Social Security/National Insurance numbers" field
  get SocialSecurity() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.socialSecurity"]').eq(1);
  }

  // "Social Security Estimation /National Insurance numbers" field
  get EstimateSocialSecurity() {
    return cy.get('[path="cyberRisk.shared.numberOfSocialSecurity"]');
  }

  // "PCI information" field
  get PCIinformation() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.PCIInformation"]').eq(1);
  }

  get EstimatePCIinformation() {
    return cy.get('[path="cyberRisk.shared.numberOfPCIInformation"]');
  }

  //  "Performs Regular Backups" field
  get PerformsRegularBackups() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.performRegularBackups"]').eq(1);
  }

  // "Protect Backups" field
  get ProtectBackups() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.protectBackups"]').eq(1);
  }

  // "Uses Email Filtering" field
  get EmailFiltering() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.usesEmailFiltering"]').eq(1);
  }

  // "Access web-based email" field
  get AccessWebBasedEmail() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.accessWebBasedEmail"]').eq(0);
  }

  // "Uses Anti-Virus and Anti-Threat Protection" field
  get AntiVirus() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.usesAntiVirus"]').eq(1);
  }

  //  "Uses Encryption on Portable Devices" field
  get Encryption() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.encryptData"]').eq(1);
  }

  // "Data Downloaded to Portable Devices" field
  get DownloadedToPortableDevices() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.sensitiveUnencryptedData"]').eq(0);
  }

  // "Manages Critical Patching on a Schedule" field
  get CriticalPatching() {
    return cy.get('input[type="radio"][name="cyberRisk.shared.criticalPatching"]').eq(0);
  }

  // Menna's Actions from 70 to 88
  // getting Remote Network Access -> selection yes
  get RemoteNetworkAccess() { return cy.get('input[type="radio"][name="cyberRisk.shared.remoteNetworkAccess"]').eq(0); }

  // getting Virtual Private Network (VPN) -> selection No
  get VPN() { return cy.get('input[type="radio"][ name="cyberRisk.coalition.mfaVPN"]').eq(1); }

  // geeting Administrator and Privileged accounts -> selection No
  get AdministratorAndPrivilegedAccounts() { return cy.get('input[type="radio"][ name="cyberRisk.shared.administratorAndPreviledgedAccounts"]').eq(1); }

  // geeting External Remote Desktop Protocol -> selection No
  get ExternalRemoteDesktopProtocols() { return cy.get('input[type="radio"][ name="cyberRisk.shared.externalRemoteDesktop"]').eq(1); }

  // geeting Independent contractors and vendors accessing the network -> selection No
  get IndependentContractors() { return cy.get('input[type="radio"][ name="cyberRisk.shared.independentVendorsNetworkAccess"]').eq(1); }

  // geeting All email accounts -> selection Yes
  get AllEmailAccounts() { return cy.get('input[type="radio"][ name="cyberRisk.shared.allEmailAccounts"]').eq(0); }

  // geeting Change Password Quarterly -> selection Yes
  get ChangePasswordQuarterly() { return cy.get('input[type="radio"][ name="cyberRisk.datalock.changePasswordQuarterly"]').eq(0); }

  // geeting Strong Passwords -> selection Yes
  get StrongPasswords() { return cy.get('input[type="radio"][ name="cyberRisk.shared.strongPasswords"]').eq(0); }

  // geeting Perform Cyber Security Training -> selection Yes
  get PerformCyberSecurityTraining() { return cy.get('input[type="radio"][ name="cyberRisk.shared.performCyberSecurityTraining"]').eq(0); }

  // geeting EOL or EOS Software still in-use -> selection Yes
  get EOLOrEOSstillInUse() { return cy.get('input[type="radio"][ name="cyberRisk.shared.segregateEndOfLifeSystems"]').eq(0); }

  // geeting EOL or EOS Software is segregated -> selection Yes
  get EOLorEOSSegregated() { return cy.get('input[type="radio"][ name="cyberRisk.shared.networkSegregatedSoftware"]').eq(0); }

  // geeting Biometric Records -> selection Yes
  get BiometricRecords() { return cy.get('input[type="radio"][ name="cyberRisk.shared.biometricRecordsStorage"]').eq(0); }

  // geeting Applicant Is PCI Compliant -> selection Yes
  get PciCompliant() { return cy.get('input[type="radio"][ name="cyberRisk.shared.pciCompliant"]').eq(0); }

  // geeting Funds Transfer Dual Control -> with its 3 selection
  get FundsTransferDualControl() { return cy.get('[path="cyberRisk.shared.secondConfirmationBeforeEft"] > .tru-form-item > .tru-column > .tru-single-select-arrow-wrapper > .ant-select ant-select-single ant-select-show-arrow > .ant-select-arrow'); }

  // selection 1 Yes - all payments
  get SelectionYesAllPayment() { return cy.get('.ant-select-item-option-content'); }

  /*
    // selection 2 Yes - above $5k only
    get YesAbove$5kOnly(){return cy.get('[id="rc_select_8_list_2"]')};
    // selection 3 Yes - above $25k only
    get YesAbove$25kOnly(){return cy.get('[id="rc_select_8_list_3"]')};
*/
  // geeting Administrative Dual Control -> selection Yes
  get AdministrativeDualControl() { return cy.get('input[type="radio"][ name="cyberRisk.shared.administrativeDualControl"]').eq(0); }

  // geeting Infringement of copyright  -> selection Yes
  get InfringementOfCopyright() { return cy.get('input[type="radio"][ name="coverage.datalock.infringmentOfCopyright"]').eq(0); }

  // geeting Infringement of trademark  -> selection Yes
  get InfringementOfTrademark() { return cy.get('input[type="radio"][ name="coverage.datalock.infringmentOfTradeMark"]').eq(0); }

  // geeting Libel or slander  -> selection Yes
  get LibelOrSlander() { return cy.get('input[type="radio"][ name="coverage.datalock.libelOrSlander"]').eq(0); }

  // geeting Takedown Procedures  -> selection Yes
  get TakedownProcedures() { return cy.get('input[type="radio"][ name="cyberRisk.bbr.takeDownProcedures"]').eq(0); }

  // geeting Formal Review Broadcast  -> selection Yes
  get FormalReviewBroadcast() { return cy.get('input[type="radio"][ name="cyberRisk.bbr.formalReviewBroadcast"]').eq(0); }

  // geeting Formal Review Supervised  -> selection Yes
  get FormalReviewSupervised() { return cy.get('input[type="radio"][ name="cyberRisk.bbr.formalReviewSupervised"]').eq(0); }

  // End of Menna's sction from 70 to 88
  // Emad and Zyad's Section
  // getting Aware of Possible Pending Claims field
  get AwareOfPossiblePendingClaims() {
    cy.get('button[class="tru-button link "]').contains('Claims').click();
    return cy.get('input[type="radio"][name="claims.shared.awareOfPossibleClaims"]').eq(0);
  }

  // getting Recent Incidents/claims Are Closed field
  get RecentIncidentsAndClaimsAreClosed() {
    return cy.get('input[type="radio"][name="claims.shared.recentIncidentsAreClosed"]').eq(0);
  }

  // getting Number of claims text field
  get NumOfClaims() {
    return cy.get('input.tru-number-input[placeholder="How many claims in total?"]');
  }

  // getting Any single claim in excess of $25,000?
  get ExceedingLimit() {
    return cy.get('input[type="radio"][name="claims.shared.priorClaimsExcess25k"]').eq(0);
  }

  // getting Nature of the legal Action -> Just clicking to Display the list
  get NatureOflegalAction() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Nature of the Legal Action');
  }

  // Selecting from nature of legal action list
  get SelectedNatureOfLegalAction() {
    return cy.get('.ant-select-item-option-content').contains('Cyber Business Interruption');
  }

  // Description of recent claims
  get DescribtionOfRecentClaims() {
    return cy.get('input[class="tru-text-input "][placeholder="Describe Recent Incidents/claims"]');
  }

  // getting Amount of claims
  get AmountOfClaims() {
    return cy.get('input[type="text"][placeholder="Amount of Recent Incidents Claim(s)"]');
  }

  // getting Describe Remediation Following Recent Incident(s)
  get RemediationFollowingRecentIncidents() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Describe Remediation Following Recent Incident(s)');
  }

  // getting selected Remediation
  get SelectedRemediation() {
    return cy.get('.ant-select-item-option-content').contains('Device wiped remotely');
  }

  // getting Aware of New Claims
  get CheckAwareOfnewClaims() {
    return cy.get('input[type="radio"][name="claims.shared.awareOfNewClaims"]').eq(0);
  }

  // getting New claims explanation
  get NewClaimsExplanation() {
    return cy.get('textarea[class="tru-textarea"][placeholder="New claims explanation"]');
  }

  // getting BBR Additional Claim
  get BbrAdditionalClaim() {
    return cy.get('input[type="radio"][name="claims.bbr.bbrAdditionalClaimQuestion"]').eq(0);
  }

  // Coverage Section
  // getting Effective Date
  get EffectiveDate() {
    cy.get('button[class="tru-button link "]').contains('Coverage').click();
    return cy.get('input[placeholder="DD/MM/YYYY"]');
  }

  get scrollToNextMonth() {
    return cy.get('span[class="ant-picker-next-icon"]');
  }

  // Selection of date
  get SelectedeffectiveDate() {
    return cy.get('div[class="ant-picker-cell-inner"]').contains('23');
  }

  // getting Beazly Limit
  get Beazlyalimit() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Beazly Limit');
  }

  // getting selected Beazly Limit
  get SelectedBeazlylimit() {
    return cy.get('.ant-select-item-option-content').contains('$ 3,000,000');
  }

  // getting Beazly Retention
  get BeazlyaRetention() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Beazly Retention');
  }

  // getting selected Beazly retention
  get SelectedBeazlyRetention() {
    return cy.get('.ant-select-item-option-content').contains('$ 50,000');
  }

  get Coalition_Limit_List() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Coalition Limit');
  }

  get Select_CoalitionLimit() {
    return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="$ 25,000"]');
    // '.ant-select-item-option-content').contains("$ 25,000");
  }

  get Coalition_Retention_List() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Coalition Retention');
  }

  get Select_CoalitionRetention() {
    return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="$ 500"]');
    // '.ant-select-item-option-content').contains("$ 500");
  }

  get AddClimeCoverage() {
    return cy.get('input[type="radio"][name="coverage.cfc.addCrimeCoverage"]').eq(0);
  }

  get AddTechnologyErrorsandOmissions() {
    return cy.get('input[type="radio"][name="coverage.everest.technologyErrorsAndOmissions"]').eq(0);
  }

  // Quote Declined assertion
  get QuoteDeclined() { return cy.get('.slick-current > :nth-child(1) > .quote-column > .quote-details-wrapper > .quote-header-and-name-wrapper > .status-with-link > .quote-status').should('be.visible').contains('Declined'); }

  // Filter
  get Filter() { return cy.get('.filter-tags-wrapper > .tru-search-bar > .false'); }

  get GetQuoteButton() {
    return cy.contains('Get Quote');
  }

  get DataLockLimit() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Datalock Limit');
  }

  get SelectedDataLockLimit() {
    return cy.get('.ant-select-item-option-content').contains('$ 100,000');
  }

  get EveerestLimit() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Everest Limit');
  }

  get SelectedeverestLimit() {
    return cy.get('.ant-select-item-option-content').contains('$1,000,000');
  }

  get DatalockRetention() {
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Datalock Retention');
  }

  get SelectedDatalockRetention() {
    return cy.get('.ant-select-item-option-content').contains('$ 25,000');
  }

  // displayed error schema
  get ErrorSchema() {
    return cy.get('input[class="false"][value="[error]"]');
  }

  // navigate to applicant
  get NavigateApplicantSection() {
    cy.get('button[class="tru-button link "]').contains('Applicant');
  }
}
module.exports = new AppFormPage();
