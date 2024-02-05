class NewRequestPage{
    get AddBtn(){
        return cy.get(".tru-button").contains("Add");
   }

   get selectNewReq(){
        return cy.get('.open > .animate__animated > :nth-child(1)');
   }

 
   get SelectClient(){
        return cy.get('.ant-select-selector').contains('Select Client')    
   }
   get searchresult(){
     
     return cy.get('.ant-select-item-option-content').contains("zooz");
   }

  /* get  SelectedClient(){
        //console.log(cy.contains('Elmar Test'))
        return cy.get('#root > div > div.open-popover > div > div > div.popover-content > div > div > form > div > div.select-client-add-user-wrapper > div > div')
        .type("zooz")
        
    //     return cy.contains('Elmar Test');
   }*/
   get SelectBranch(){
     return cy.get('.ant-select-selection-item').contains('Select Branch');
   }
   get SelectedBranch(){
     return cy.get('.ant-select-item-option-content').contains('implementation Egypt')
   }
   get ContinueBtn(){
    //cy.wait(10000),
    //console.log("continue clicked");
  
    return cy.get("[type='submit']").contains('Continue').should('be.visible')
     }
  

}
module.exports=new NewRequestPage();