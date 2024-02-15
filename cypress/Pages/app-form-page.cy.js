//Add Your Code Here
class AppFormPage{
    // Maggies part from 9 to 24
    // Getting Applicant name 
get ApplicantName (){return cy.get('input[type="text"][placeholder="Associate Name"]')}

    //geeting lockton office 
get LocktonOffice(){return cy.get('span.ant-select-selection-placeholder').contains('Lockton Office');}

    //Selecting a lockton office from the drop down
get SelectLocktonOffice(){return cy.get('.ant-select-item-option-content').contains('Los Angeles');}

    //Selecting Legal company name
get LegalCompanyName (){ return  cy.get('input[type="text"][placeholder="Legal Company name"]');}

    //selecting Trading name
get TradingName (){ return cy.get('input[type="text"][placeholder="Legal Company name"]');}

    //Selecting TradeType
get TradeType(){return cy.get('[path="applicant.everest.tradeType"] > .tru-form-item');}

     //Select a value from  TradeType dropdown
get SelectedTradeType (){ return  cy.get('[path="applicant.everest.tradeType"] > .tru-form-item').contains('Also Known As');}

    // Selecting Address Field
get SearchForAddress (){ return cy.get('.location-search-wrapper');}

    // Selecting Suite/Unit/Floor field
get SuiteUnitFloor(){ return cy.get('input[type="text"][placeholder="Suite/Unit/Floor Etc."]')};




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
**/

    // Select Website field
get Website(){ return cy.get('input[type="text"][placeholder="Website"]');}

    // Select Use Client data toggle
get UseClientDataToggle(){return cy.get('[path="applicant.shared.sameAsClient"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch');}
  


// Sara's Section
//scroll to city field 
get ScrollToCity(){return cy.get('[path="applicant.shared.city"] > .tru-form-item');} 
// getting Business Type  
get BusinessType(){return cy.get('span.ant-select-selection-placeholder').contains('Business Type');}
//getting select business type 
get SelectBusinessType(){return cy.get('.ant-select-item-option-content').contains('Individual');}
// getting industry Type  
get IndustryType(){return cy.get('[path="applicant.shared.industryType"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');} 
//getting select industry type 
get SelectIndustryType(){return cy.get('.ant-select-item-option-content').contains('Administration of Education Programs');}
// getting Datalock Industry    
get DatalockIndustry(){return cy.get('[path="applicant.datalock.industryName"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');}
//getting select Datalock Industry 
get SelectDatalockIndustry(){return cy.get('.ant-select-item-option-content').contains('Agriculture');}
//getting Business Description 
get BusinessDescription(){return cy.get('textarea[class="tru-textarea"][placeholder="Business Description"]');}
//getting Adult Content 
get AdultContent(){return cy.get('[path="coverage.shared.engagedIndustries.adult"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Cannabis
get Cannabis(){return cy.get('[path="coverage.shared.engagedIndustries.cannabis"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting care provider
get CareProvider(){return cy.get('[path="coverage.shared.engagedIndustries.careProvider"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Cryptocurrency or Blockchain
get CryptocurrencyOrBlockchain(){return cy.get('[path="coverage.shared.engagedIndustries.cryptoCurrency"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting data Processing
get DataProcessing(){return cy.get('[path="coverage.shared.engagedIndustries.dataProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Debt Collection
get DebtCollection(){return cy.get('[path="coverage.shared.engagedIndustries.debtCollection"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Gambling
get Gambling(){return cy.get('[path="coverage.shared.engagedIndustries.gambling"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Payment Processing
get PaymentProcessingn(){return cy.get('[path="coverage.shared.engagedIndustries.paymentProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
//getting Storage Hosting
get StorageHosting(){return cy.get('[path="coverage.shared.engagedIndustries.storageHosting"] >.tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');} 
//getting Number Of Employees
get NumberOfEmployees(){return cy.get('input[type="number"][placeholder="Number Of Employees"]');}
//getting Number of Non US Employees
get NumberOfNonUSEmployees(){return cy.get('input[type="number"][placeholder="Number of Non US Employees"]');}
//getting Annual Revenue for the last complete financial year $
get AnnualRevenueLastFinancialYear (){return cy.get('input[type="text"][placeholder="Annual Revenue for the last complete financial year $"]');}
//getting Gross Profit for the last complete financial year $
get GrossProfitLastFinancialYear (){return cy.get('input[type="text"][placeholder="Gross Profit for the last complete financial year $"]');} 
//getting Non US Revenue
get NonUSRevenue(){return cy.get('input[type="radio"][name="applicant.shared.globalRevenue"]').eq(0);}
//getting Non US Revenue Percentage (%)
get NonUSRevenueAmount(){return cy.get('input.tru-number-input[placeholder="Non US Revenue Percentage (%)"]');}
//getting EEA Revenue
get EEARevenue(){return cy.get('input[type="radio"][name="applicant.datalock.eeaRevenue"]').eq(0);}
//getting High Risk Territories
get HighRiskTerritories(){return cy.get('input[type="radio"][name="applicant.datalock.highRiskTerritories"]').eq(1);}
//getting Include TRIA
get IncludeTRIA(){return cy.get('input[type="radio"][name="applicant.datalock.includeTria"]').eq(1);} 
//getting Change in Business Activities
get ChangeInBusinessActivities(){return cy.get('input[type="radio"][name="applicant.bbr.mergerAcquisition"]').eq(1);} 
//getting Type of Coverage
get TypeOfCoverage(){return cy.get('span.ant-select-selection-placeholder').contains('Type of Coverage');}  
//getting select addmitted Type of Coverage
get SelectCoverage(){return cy.get('.ant-select-item-option-content').contains("ADMITTED"); }

     // End of sara's section
     get PersonallyIdentifiableInfo(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.personallyIdentifiableInformation"]').eq(0);}
    get EstimatePersonallyIdentifiableInfo(){
        return cy.get('input.tru-number-input[placeholder="Estimate"]')}
        
    // "Medical records" field
    get MedicalRecords(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.medicalRecords"]').eq(0);}
    
    // "Financial information" field
    get FinancialInformation(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.financialInformation"]').eq(0);}
    get EstimateFinancialInformation(){
        return cy.get('[path="cyberRisk.shared.numberOfFinancialInformation"]');}
    
    // "Driver license numbers" field
    get DriverLicenseNumber(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.driverLicence"]').eq(0);}
    get EstimateDriverLicense(){
        return cy.get('[path="cyberRisk.shared.numberOfDriverLicence"]');}
    
    // "Social Security/National Insurance numbers" field
    get SocialSecurity(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.socialSecurity"]').eq(1);}
    
    // "PCI information" field
    get PCIinformation(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.PCIInformation"]').eq(1);}
    
    //  "Performs Regular Backups" field
    get PerformsRegularBackups(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.performRegularBackups"]').eq(1);}
    
    // "Protect Backups" field
    get ProtectBackups(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.protectBackups"]').eq(1);}
    
    // "Uses Email Filtering" field
    get EmailFiltering(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.usesEmailFiltering"]').eq(1);}
    
    // "Access web-based email" field
    get AccessWebBasedEmail(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.accessWebBasedEmail"]').eq(0);}
    
    // "Uses Anti-Virus and Anti-Threat Protection" field
    get AntiVirus(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.usesAntiVirus"]').eq(1);}
    
    //  "Uses Encryption on Portable Devices" field
    get Encryption(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.encryptData"]').eq(1);}
    // "Data Downloaded to Portable Devices" field
    get DownloadedToPortableDevices(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.sensitiveUnencryptedData"]').eq(0);}
    
    // "Manages Critical Patching on a Schedule" field
    get CriticalPatching(){
        return cy.get('input[type="radio"][name="cyberRisk.shared.criticalPatching"]').eq(0);}
    
// Emad and Zyad's Section
//getting Aware of Possible Pending Claims field 
get AwareOfPossiblePendingClaims(){
    cy.get('button[class="tru-button link "]').contains('Claims').click();
    return cy.get('input[type="radio"][name="claims.shared.awareOfPossibleClaims"]').eq(0);
}
// getting Recent Incidents/claims Are Closed field
get RecentIncidentsAndClaimsAreClosed(){
    return cy.get('input[type="radio"][name="claims.shared.recentIncidentsAreClosed"]').eq(0);
}
//getting Number of claims text field 
get NumOfClaims (){
    return cy.get('input.tru-number-input[placeholder="How many claims in total?"]');
}
// getting Any single claim in excess of $25,000? 
get ExceedingLimit(){
    return cy.get('input[type="radio"][name="claims.shared.priorClaimsExcess25k"]').eq(0);   
}
//getting Nature of the legal Action -> Just clicking to Display the list
get NatureOflegalAction(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains('Nature of the Legal Action');
}
// Selecting from nature of legal action list 
get SelectedNatureOfLegalAction(){
     return cy.get('.ant-select-item-option-content').contains('Cyber Business Interruption');
}
//Description of recent claims
get DescribtionOfRecentClaims(){
    return cy.get('input[class="tru-text-input "][placeholder="Describe Recent Incidents/claims"]');
} 
//getting Amount of claims
get AmountOfClaims(){
    return cy.get('input[type="text"][placeholder="Amount of Recent Incidents Claim(s)"]');
}
//getting Describe Remediation Following Recent Incident(s)
get RemediationFollowingRecentIncidents(){
   return cy.get('span[class="ant-select-selection-placeholder"]').contains('Describe Remediation Following Recent Incident(s)');
}
//getting selected Remediation
get SelectedRemediation(){
    return cy.get('.ant-select-item-option-content').contains('Device wiped remotely');
}
//getting Aware of New Claims
get CheckAwareOfnewClaims(){
    return cy.get('input[type="radio"][name="claims.shared.awareOfNewClaims"]').eq(0);
}
//getting New claims explanation
get NewClaimsExplanation(){
    return cy.get('textarea[class="tru-textarea"][placeholder="New claims explanation"]');
}
//getting BBR Additional Claim
get BbrAdditionalClaim(){
    return cy.get('input[type="radio"][name="claims.bbr.bbrAdditionalClaimQuestion"]').eq(0);
}
// Coverage Section
//getting Effective Date 
get EffectiveDate(){
    cy.get('button[class="tru-button link "]').contains('Coverage').click();
    return cy.get('input[placeholder="DD/MM/YYYY"]');
}
//Selection of date 
get SelectedeffectiveDate(){
    return cy.get('div[class="ant-picker-cell-inner"]').contains("20");
}
//getting Beazly Limit
get Beazlyalimit(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains("Beazly Limit");
}
//getting selected Beazly Limit
get SelectedBeazlylimit(){
    return cy.get('.ant-select-item-option-content').contains("$ 3,000,000");
}
//getting Beazly Retention
get BeazlyaRetention(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains("Beazly Retention");
}
//getting selected Beazly retention
get SelectedBeazlyRetention(){
    return cy.get('.ant-select-item-option-content').contains("$ 50,000");
}
get Coalition_Limit_List(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains("Coalition Limit");
}
get Select_CoalitionLimit(){
    return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="$ 25,000"]');
        //'.ant-select-item-option-content').contains("$ 25,000");
}
get Coalition_Retention_List(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains("Coalition Retention");
}
get Select_CoalitionRetention(){
    return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="$ 500"]');
        //'.ant-select-item-option-content').contains("$ 500");
}
get AddCrimeCoverage(){
    return cy.get('input[type="radio"][name="coverage.cfc.addCrimeCoverage"]').eq(0);
}
get AddTechnologyErrorsandOmissions(){
    return cy.get('input[type="radio"][name="coverage.everest.technologyErrorsAndOmissions"]').eq(0);
}
 

} 
module.exports=new AppFormPage();



