import AppFormPage from "../Pages/app-form-page.cy.js";

class OptionalFieldsTest{
    SubmitOptionalRequest(){
      AppFormPage.TradingName.type('trade');
      AppFormPage.BusinessDescription.type('business');
      AppFormPage.AdultContent.click();
      AppFormPage.Cannabis.click();
      AppFormPage.CareProvider.click();
      AppFormPage.CryptocurrencyOrBlockchain.click();
      AppFormPage.DataProcessing.click();
      AppFormPage.DebtCollection.click();
      AppFormPage.Gambling.click();
      AppFormPage.PaymentProcessingn.click();
      AppFormPage.StorageHosting.click();
      AppFormPage.InfringementOfCopyright.click();
      AppFormPage.InfringementOfTrademark.click();
      AppFormPage.LibelOrSlander.click();
      AppFormPage.GetQuoteButton.click();
      AppFormPage.ErrorSchema.should('be.visible');

    
    }
}
module.exports=new OptionalFieldsTest();