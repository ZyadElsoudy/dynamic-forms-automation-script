/**class NewRequestPage{
     get AddBtn(){return cy.get(".tru-button").contains("Add");}
     get selectNewReq(){return cy.get('.open > .animate__animated > :nth-child(1)').contains('Request');}

// Adding the following lines to select a US request
    get selectNewReqType(){return cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');}
   
    get selectedNewReqType(){return  cy.get('.ant-select-selection-item').contains('New Cyber Security Request - US').click(); }

    
    get SelectClient(){return cy.get('.ant-select-selector').contains('Select Client') ;   }
    get searchresult(){return cy.get('.ant-select-item-option-content').contains("zooz");}
    get SelectBranch(){return cy.get('.ant-select-selection-item').contains('Select Branch');}
// Selecting trufla location as it's the assigned location on cypress US
    get SelectedBranch(){return cy.get('.ant-select-item-option-content').contains('Trufla Location')}
//get SelectedBranch(){return cy.get('.ant-select-item-option-content').contains('implementation Egypt')}
    get ContinueBtn(){return cy.get("[type='submit']").contains('Continue').should('be.visible')}
}
module.exports=new NewRequestPage();**/

//-----------
class NewRequestPage{
    get AddBtn(){return cy.get(".tru-button").contains("Add");}
    get SelectNewRequest(){return cy.get('span[class="ant-select-selection-item"][title="Commercial Auto"]');}
    get RequestOption(){return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="New Cyber Security Request - US"]');}
    get selectNewReq(){return cy.get('.open > .animate__animated > :nth-child(1)');}
    get SelectClient(){return cy.get('.ant-select-selector').contains('Select Client')    }
    get searchresult(){return cy.get('.ant-select-item-option-content').contains("zooz");}
   get SelectBranch(){return cy.get('.ant-select-selection-item').contains('Select Branch');}
    get SelectedBranch(){return cy.get('.ant-select-item-option-content').contains('implementation Egypt')}
    get ContinueBtn(){return cy.get("[type='submit']").contains('Continue').should('be.visible')}
 }
 module.exports=new NewRequestPage();