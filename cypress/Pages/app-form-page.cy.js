//Add Your Code Here
class AppFormPage{

    // Associate Email Address Field (auto filled)
    // get AssociateEmaileAddresss ()
    // {return cy.get('[path="applicant.shared.brokerEmail"] > .tru-form-item > .tru-column > .tru-text-input').contains("trufla")}



get ApplicantName ()
{ return cy.get('input[type="text"][placeholder="Associate Name"]') }


get LocktonOffice(){
   
     return cy.get('span.ant-select-selection-placeholder').contains('Lockton Office');
 }

  get SelectLocktonOffice(){

     return cy.get('.ant-select-item-option-content').contains('Los Angeles');      
 }


get LegalCompanyName ()
{ return  cy.get('input[type="text"][placeholder="Legal Company name"]')}


get TradingName ()
{ return cy.get('input[type="text"][placeholder="Legal Company name"]')}


get TradeType () 
{ return cy.get('[path="applicant.everest.tradeType"] > .tru-form-item')}

get SelectedTradeType ()
{ return  cy.get('[path="applicant.everest.tradeType"] > .tru-form-item').contains('Also Known As')}


get SearchForAddress ()
{ return cy.get('.location-search-wrapper')


}


get SuiteUnitFloor()
{ return cy.get('input[type="text"][placeholder="Suite/Unit/Floor Etc."]')}


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

get Website ()
{ return cy.get('input[type="text"][placeholder="Website"]')}


get UseClientDataToggle()
{
    return cy.get('[path="applicant.shared.sameAsClient"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch')
 }

} 
module.exports=new AppFormPage();


