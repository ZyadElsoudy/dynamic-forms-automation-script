import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
let cntr =5;
class CFCDeclinedQuoteTest{
        SubmitCFCRequestAndGettingDeclinedQuote(){
            cy.get('button[class="tru-button default remove-tag"]').eq(9).click();
            for (let i = 0; i < 3; i++) {
                if (i==2){
                    cntr--;
                    cy.get('button[class="tru-button default remove-tag"]').eq(cntr).click();
                }else{

                    cy.get('button[class="tru-button default remove-tag"]').eq(cntr).click();
                    cntr--;
                }
        }
        //adding rest of actions
}
}
module.exports=new CFCDeclinedQuoteTest();