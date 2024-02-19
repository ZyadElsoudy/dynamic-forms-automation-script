import AppFormPage from "../Pages/app-form-page.cy.js";
let cntr =6;
class DatalockRequestTest{
    SubmitDatalockRequest(){
        //Adding actions here 
        /*cy.get('button[class="tru-button default remove-tag"]').eq(7).click();
        cy.get('button[class="tru-button default remove-tag"]').eq(8).click();
        cy.get('button[class="tru-button default remove-tag"]').eq(9).click();
        cy.get('button[class="tru-button default remove-tag"]').eq(10).click();*/
    
        for (let i = 0; i < 4; i++) {
            cy.get('button[class="tru-button default remove-tag"]').eq(cntr).click();
            cntr--;
    }
    }
}
module.exports=new DatalockRequestTest();