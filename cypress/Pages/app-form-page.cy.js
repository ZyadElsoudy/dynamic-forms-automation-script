//Add Your Code Here
class AppFormPage{
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