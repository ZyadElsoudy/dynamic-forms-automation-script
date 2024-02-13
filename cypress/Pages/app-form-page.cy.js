//Add Your Code Here
class AppFormPage{
get ApplicantName (){
    return cy.get('input[type="text"][placeholder="Associate Name"]')}


get LocktonOffice(){return cy.get('span.ant-select-selection-placeholder').contains('Lockton Office');}
get SelectLocktonOffice(){return cy.get('.ant-select-item-option-content').contains('Los Angeles');  }
get LegalCompanyName (){ return  cy.get('input[type="text"][placeholder="Legal Company name"]');}
get TradingName (){ return cy.get('input[type="text"][placeholder="Legal Company name"]');}
get TradeType(){return cy.get('[path="applicant.everest.tradeType"] > .tru-form-item');}
get SelectedTradeType (){ return  cy.get('[path="applicant.everest.tradeType"] > .tru-form-item').contains('Also Known As');}
get SearchForAddress (){ return cy.get('.location-search-wrapper');}
get SuiteUnitFloor(){ return cy.get('input[type="text"][placeholder="Suite/Unit/Floor Etc."]')};
// The following fields are auto filled with address 
/** 
get Street()
{return cy.get('input[type="text"][placeholder="Street"]')}

get City()
{return cy.get('input[type="text"][placeholder="City"]')}

get State ()
{ return cy.get('#rc_select_13') }

get SelectedState()
{ return cy.get('#rc_select_13').contains("Denver") }

get ZipCode()
{return cy.get('input[type="text"][placeholder="Zip Code"]')}
**/

get Website(){ return cy.get('input[type="text"][placeholder="Website"]');}
get UseClientDataToggle(){return cy.get('[path="applicant.shared.sameAsClient"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch');}
  
// Emad and Zyad's Section
get AwareOfPossiblePendingClaims(){cy.get('button[class="tru-button link "]').contains('Claims').click();
    return cy.get('input[type="radio"][name="claims.shared.awareOfPossibleClaims"]').eq(0);}
// getting Recent Incidents/claims Are Closed field
get RecentIncidentsAndClaimsAreClosed(){return cy.get('input[type="radio"][name="claims.shared.recentIncidentsAreClosed"]').eq(0);}
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
    return cy.get('div[class="ant-picker-cell-inner"]').contains("15");
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
    return cy.get('.ant-select-item-option-content').contains("$ 25,000");
}
get Coalition_Retention_List(){
    return cy.get('span[class="ant-select-selection-placeholder"]').contains("Coalition Retention");
}
get Select_CoalitionRetention(){
    return cy.get('.ant-select-item-option-content').contains("$ 500");
}
get AddCrimeCoverage(){
    return cy.get('input[type="radio"][name="coverage.cfc.addCrimeCoverage"]').eq(0);
}
get AddTechnologyErrorsandOmissions(){
    return cy.get('input[type="radio"][name="coverage.everest.technologyErrorsAndOmissions"]').eq(0);
}
 
// Sara's Section

get scrollSaraSec(){return cy.get('[path="applicant.shared.city"] > .tru-form-item');} 
get BusinessType(){return cy.get('span.ant-select-selection-placeholder').contains('Business Type');}
get SelectBusinessType(){return cy.get('.ant-select-item-option-content').contains('Individual');}
get IndustryType(){return cy.get('[path="applicant.shared.industryType"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');} 
get SelectIndustryType(){return cy.get('.ant-select-item-option-content').contains('Administration of Education Programs');}
get DatalockIndustry(){return cy.get('[path="applicant.datalock.industryName"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');}
get SelectDatalockIndustry(){return cy.get('.ant-select-item-option-content').contains('Agriculture');}
get BusinessDescription(){return cy.get('textarea[class="tru-textarea"][placeholder="Business Description"]');}
get AdultContent(){return cy.get('[path="coverage.shared.engagedIndustries.adult"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get Cannabis(){return cy.get('[path="coverage.shared.engagedIndustries.cannabis"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get CareProvider(){return cy.get('[path="coverage.shared.engagedIndustries.careProvider"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get CryptocurrencyOrBlockchain(){return cy.get('[path="coverage.shared.engagedIndustries.cryptoCurrency"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get DataProcessing(){return cy.get('[path="coverage.shared.engagedIndustries.dataProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}get DebtCollection(){return cy.get('[path="coverage.shared.engagedIndustries.debtCollection"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get Gambling(){return cy.get('[path="coverage.shared.engagedIndustries.gambling"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get PaymentProcessingn(){return cy.get('[path="coverage.shared.engagedIndustries.paymentProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');}
get StorageHosting(){return cy.get('[path="coverage.shared.engagedIndustries.storageHosting"] >.tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');} 
get NumberOfEmployees(){return cy.get('input[type="number"][placeholder="Number Of Employees"]');}
get NumberOfNonUSEmployees(){return cy.get('input[type="number"][placeholder="Number of Non US Employees"]');}
get AnnualRevenueLastFinancialYear (){return cy.get('input[type="text"][placeholder="Annual Revenue for the last complete financial year $"]');}
get GrossProfitLastFinancialYear (){return cy.get('input[type="text"][placeholder="Gross Profit for the last complete financial year $"]');} 
get NonUSRevenue(){return cy.get('input[type="radio"][name="applicant.shared.globalRevenue"]').eq(0);}
get NonUSRevenueAmount(){return cy.get('input.tru-number-input[placeholder="Non US Revenue Percentage (%)"]');}
get EEARevenue(){return cy.get('input[type="radio"][name="applicant.datalock.eeaRevenue"]').eq(0);}
get HighRiskTerritories(){return cy.get('input[type="radio"][name="applicant.datalock.highRiskTerritories"]').eq(1);}
get IncludeTRIA(){return cy.get('input[type="radio"][name="applicant.datalock.includeTria"]').eq(1);} 
get ChangeInBusinessActivities(){return cy.get('input[type="radio"][name="applicant.bbr.mergerAcquisition"]').eq(1);} 
get TypeOfCoverage(){return cy.get('span.ant-select-selection-placeholder').contains('Type of Coverage');}  
get SelectCoverage(){return cy.get('.ant-select-item-option-content').contains("ADMITTED"); }
     // End of sara's section
} 
module.exports=new AppFormPage();



