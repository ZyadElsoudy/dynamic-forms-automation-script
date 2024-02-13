class NewRequestPage{

   get AddBtn(){return cy.get(".tru-button").contains("Add");}
   get SelectNewRequest(){return cy.get('span[class="ant-select-selection-item"][title="Auto"]');}
   get RequestOption(){return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="New Cyber Security Request - US"]');}
   get selectNewReq(){return cy.get('.open > .animate__animated > :nth-child(1)');}
   get SelectClient(){return cy.get('.ant-select-selector').contains('Select Client') }
   get searchresult(){return cy.get('.ant-select-item-option-content').contains("zooz");}
   get SelectBranch(){return cy.get('.ant-select-selection-item').contains('Select Branch');}
   get SelectedBranch(){return cy.get('.ant-select-item-option-content').contains('implementation Egypt')}
   get ContinueBtn(){return cy.get("[type='submit']").contains('Continue').should('be.visible')}
//============================================================================================================
  get AddBtn(){return cy.get(".tru-button").contains("Add");}
  get SelectNewRequest(){return cy.get('span[class="ant-select-selection-item"][title="Auto"]');}
  get RequestOption(){return cy.get('div[class="ant-select-item ant-select-item-option ant-select-item-option-active"][title="New Cyber Security Request - US"]');}
  get selectNewReq(){return cy.get('.open > .animate__animated > :nth-child(1)');}
  get SelectClient(){return cy.get('.ant-select-selector').contains('Select Client')    }
  get searchresult(){return cy.get('.ant-select-item-option-content').contains("sara ahmed");}
  get SelectBranch(){return cy.get('.ant-select-selection-item').contains('Select Branch');}
  get SelectedBranch(){return cy.get('.ant-select-item-option-content').contains('implementation Egypt')}
  get ContinueBtn(){return cy.get("[type='submit']").contains('Continue').should('be.visible')}
//>>>>>>> sara/////////////////////////////////////////////////////////////////////////////////////////
}
module.exports=new NewRequestPage();