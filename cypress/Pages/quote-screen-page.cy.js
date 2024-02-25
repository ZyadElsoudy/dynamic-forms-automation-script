
class QuoteScreenPage{
   get AllLogs () {return cy.get ('span[class="title"]').contains('Log');}
   get DatalockLogs (){return cy.get ('div[class="react-tabs"]').contains("Datalock");}
   get BBRLogs (){return cy.get ('div[class="react-tabs"]').contains("BBR");}
   get CoalitionLogs (){return cy.get ('div[class="react-tabs"]').contains("Coalition");}
   get CFCLogs (){return cy.get ('div[class="react-tabs"]').contains("CFC");}
   get EverestLogs (){return cy.get ('div[class="react-tabs"]').contains("Everest");}
   get StatusOfmarket(){return cy.get('span[class="quote-status error"]').contains('Clearance Failed');}
 }
 module.exports=new QuoteScreenPage();