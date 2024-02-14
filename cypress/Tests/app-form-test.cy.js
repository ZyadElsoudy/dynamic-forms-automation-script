//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy.js";
//from 89 to 110 
class AppFormTest{
Addingclaims(){
    AppFormPage.AwareOfPossiblePendingClaims.click();
    // cy.wait(5000);
   // cy.get(AppFormPage.RecentIncidentsAndClaimsAreClosed,{timeout:60000}).should('be.visible')
    AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
    //cy.wait(5000);
   // cy.get( AppFormPage.NumOfClaims,{timeout:60000}).should('be.visible')
    AppFormPage.NumOfClaims.type('5');
    //cy.wait(5000);
    //cy.get(AppFormPage.ExceedingLimit,{timeout:60000}).should('be.visible')
    AppFormPage.ExceedingLimit.scrollIntoView();
    AppFormPage.ExceedingLimit.click();

    //cy.wait(5000);
   // cy.get(AppFormPage.NatureOflegalAction,{timeout:60000}).should('be.visible')
    AppFormPage.NatureOflegalAction.click({force:true});
   
    // cy.wait(5000);
    //cy.get(AppFormPage.SelectedNatureOfLegalAction,{timeout:60000}).should('be.visible')
    AppFormPage.SelectedNatureOfLegalAction.click();
    
   // cy.wait(5000);
   //cy.get(AppFormPage.DescribtionOfRecentClaims,{timeout:60000}).should('be.visible')
    AppFormPage.DescribtionOfRecentClaims.type('Description');
    AppFormPage.AmountOfClaims.type('1000');
    
    //cy.wait(5000);
    //cy.get(AppFormPage.RemediationFollowingRecentIncidents,{timeout:60000}).should('be.visible')
    AppFormPage.RemediationFollowingRecentIncidents.click({force:true});
    
    //cy.wait(5000);
    //cy.get(AppFormPage.SelectedRemediation,{timeout:60000}).should('be.visible')
    AppFormPage.SelectedRemediation.click();
    
    //cy.wait(5000);
    //cy.get(AppFormPage.CheckAwareOfnewClaims,{timeout:60000}).should('be.visible')
    AppFormPage.CheckAwareOfnewClaims.click();
    AppFormPage.NewClaimsExplanation.type('explanation');
    
    //cy.wait(5000);
    //cy.get(AppFormPage.BbrAdditionalClaim,{timeout:60000}).should('be.visible')
    AppFormPage.BbrAdditionalClaim.click();
    AppFormPage.EffectiveDate.click();
    
    //cy.wait(5000);
    //cy.get(AppFormPage.SelectedeffectiveDate,{timeout:60000}).should('be.visible')
    AppFormPage.SelectedeffectiveDate.click();
    
    //cy.wait(5000);
    //cy.get(AppFormPage.Beazlyalimit,{timeout:60000}).should('be.visible')
    AppFormPage.Beazlyalimit.click({force:true});
    
    //cy.wait(5000);
    //cy.get(AppFormPage.SelectedBeazlylimit,{timeout:60000}).should('be.visible')
    AppFormPage.SelectedBeazlylimit.click();
    //cy.wait(5000);
   // cy.get(AppFormPage.BeazlyaRetention,{timeout:60000}).should('be.visible')
    AppFormPage.BeazlyaRetention.click({force:true});
   
    //cy.wait(5000);
    //cy.get(AppFormPage.SelectedBeazlyRetention,{timeout:60000}).should('be.visible')
    AppFormPage.SelectedBeazlyRetention.click();
    
    //cy.wait(5000);
    //cy.get(AppFormPage.Coalition_Limit_List,{timeout:60000}).should('be.visible')
    AppFormPage.Coalition_Limit_List.click({force:true});
    
    //cy.wait(5000);
    //cy.get(AppFormPage.Select_CoalitionLimit,{timeout:60000}).should('be.visible')
    AppFormPage.Select_CoalitionLimit.click({force:true});
    
    //cy.wait(5000);
    //cy.get(AppFormPage.Coalition_Retention_List,{timeout:60000}).should('be.visible')
    AppFormPage.Coalition_Retention_List.click({force:true});

    //cy.wait(5000);
    //cy.get(AppFormPage.Select_CoalitionRetention,{timeout:60000}).should('be.visible')
    AppFormPage.Select_CoalitionRetention.click({force:true});
    // cy.wait(5000);
    // AppFormPage.AddCrimeCoverage.click();
    //cy.wait(5000);
    //cy.get(AppFormPage.AddTechnologyErrorsandOmissions,{timeout:60000}).should('be.visible')
    AppFormPage.AddTechnologyErrorsandOmissions.click();

}
    
}
module.exports=new AppFormTest()