//const cypress = require("cypress");

class QuoteScreenpage{
get QuotesHeader(){
    return cy.get('div[class="quote-title-and-export-actions"]').contains("Quotes")
}
}
module.exports=new QuoteScreenpage();