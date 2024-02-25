
class QuoteScreenpage{
   get AllLogs () {return cy.get ('span[class="title"]').contains('Log');}
   get DatalockLogs (){return cy.get ('div[class="react-tabs"]').contains("Datalock");}
   get BBRLogs (){return cy.get ('div[class="react-tabs"]').contains("BBR");}
   get CoalitionLogs (){return cy.get ('div[class="react-tabs"]').contains("Coalition");}
   get CFCLogs (){return cy.get ('div[class="react-tabs"]').contains("CFC");}
   get EverestLogs (){return cy.get ('div[class="react-tabs"]').contains("Everest");}
   get StatusOfmarketClearance(){return cy.get('span[class="quote-status error"]').contains('Clearance Failed');}
  get QuotesHeader(){
    return cy.get('div[class="quote-title-and-export-actions"]').contains("Quotes")
}
get StatusOfmarketReffered(){
    return cy.get('span[class="quote-status warning"]').contains('Referred');
}
 }
 module.exports=new QuoteScreenPage();

