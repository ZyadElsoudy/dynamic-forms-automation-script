//const cypress = require("cypress");

class QuoteScreenpage{
get QuotesHeader(){
    return cy.get('div[class="quote-title-and-export-actions"]').contains("Quotes")
}
get StatusOfmarket(){
    return cy.get('span[class="quote-status warning"]').contains('Referred');
}
}
module.exports=new QuoteScreenpage();