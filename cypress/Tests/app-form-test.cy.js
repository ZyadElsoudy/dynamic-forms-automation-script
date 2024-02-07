//Add Your Code Here
import AppFormPage from "../Pages/app-form-page.cy.js";
//from 89 to 110 
class AppFormTest{
Addingclaims(){
    AppFormPage.AwareOfPossiblePendingClaims.click();
    cy.wait(10000);
    AppFormPage.RecentIncidentsAndClaimsAreClosed.click();
    cy.wait(10000);
    AppFormPage.NumOfClaims.type('5');
    cy.wait(10000);
    AppFormPage.ExceedingLimit.scrollIntoView();
    AppFormPage.ExceedingLimit.click();
    cy.wait(10000);
    AppFormPage.NatureOflegalAction.click({force:true});
    cy.wait(10000);
    AppFormPage.SelectedNatureOfLegalAction.click();
    cy.wait(10000);
    AppFormPage.DescribtionOfRecentClaims.type('Description');
    AppFormPage.AmountOfClaims.type('1000');
    cy.wait(10000);
    AppFormPage.RemediationFollowingRecentIncidents.click({force:true});
    cy.wait(10000);
    AppFormPage.SelectedRemediation.click();
    cy.wait(10000);
    AppFormPage.CheckAwareOfnewClaims.click();
    AppFormPage.NewClaimsExplanation.type('explanation');
    cy.wait(10000);
    AppFormPage.BbrAdditionalClaim.click();
    AppFormPage.EffectiveDate.click();
    cy.wait(10000);
    AppFormPage.SelectedeffectiveDate.click();
    cy.wait(10000);
    AppFormPage.Beazlyalimit.click({force:true});
    cy.wait(10000);
    AppFormPage.SelectedBeazlylimit.click();
    cy.wait(10000);
    AppFormPage.BeazlyaRetention.click({force:true});
    cy.wait(10000);
    AppFormPage.SelectedBeazlyRetention.click();

}
    
}
module.exports=new AppFormTest()