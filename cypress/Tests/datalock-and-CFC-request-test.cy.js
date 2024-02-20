import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
let cntr =6;
class DatalockAndCFCRequestTest{
        SubmitDatalockAndCFC(){
            for (let i = 0; i < 4; i++) {
                if(i==2){
                    cntr--; 
                }else{

                    cy.get('button[class="tru-button default remove-tag"]').eq(cntr).click();
                }
                cntr--;
        }
         //adding rest of actions
}
}
module.exports=new DatalockAndCFCRequestTest();