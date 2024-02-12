//Add Your Code Here
class AppFormPage{

    get scrollSaraSec(){

        return cy.get('[path="applicant.shared.city"] > .tru-form-item');
    } 

     get BusinessType(){

        return cy.get('span.ant-select-selection-placeholder').contains('Business Type');
    }

     get SelectBusinessType(){

        return cy.get('.ant-select-item-option-content').contains('Individual');      
    }

    get IndustryType(){

        return cy.get('[path="applicant.shared.industryType"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');
    } 

    get SelectIndustryType(){

        return cy.get('.ant-select-item-option-content').contains('Administration of Education Programs');      
    }

    get DatalockIndustry(){

        return cy.get('[path="applicant.datalock.industryName"] > .tru-form-item > .tru-column > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector');
    } 

    get SelectDatalockIndustry(){

        return cy.get('.ant-select-item-option-content').contains('Agriculture');      
    }

    get BusinessDescription(){

        return cy.get('textarea[class="tru-textarea"][placeholder="Business Description"]');
    }

    get AdultContent(){

        return cy.get('[path="coverage.shared.engagedIndustries.adult"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get Cannabis(){

        return cy.get('[path="coverage.shared.engagedIndustries.cannabis"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get CareProvider(){

        return cy.get('[path="coverage.shared.engagedIndustries.careProvider"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get CryptocurrencyOrBlockchain(){

        return cy.get('[path="coverage.shared.engagedIndustries.cryptoCurrency"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get DataProcessing(){

        return cy.get('[path="coverage.shared.engagedIndustries.dataProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get DebtCollection(){

        return cy.get('[path="coverage.shared.engagedIndustries.debtCollection"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get Gambling(){

        return cy.get('[path="coverage.shared.engagedIndustries.gambling"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get PaymentProcessingn(){

        return cy.get('[path="coverage.shared.engagedIndustries.paymentProcessing"] > .tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    }

    get StorageHosting(){

        return cy.get('[path="coverage.shared.engagedIndustries.storageHosting"] >.tru-form-item > .tru-column > .field-with-dependent-value > .tru-toggle-switch > .slider');
    } 

    get NumberOfEmployees(){

        return cy.get('input[type="number"][placeholder="Number Of Employees"]');
    }

    get NumberOfNonUSEmployees(){

        return cy.get('input[type="number"][placeholder="Number of Non US Employees"]');
    }

    get AnnualRevenueLastFinancialYear (){

        return cy.get('input[type="text"][placeholder="Annual Revenue for the last complete financial year $"]');
    }

    get GrossProfitLastFinancialYear (){
        
        return cy.get('input[type="text"][placeholder="Gross Profit for the last complete financial year $"]');
    } 

    get NonUSRevenue(){

        return cy.get('input[type="radio"][name="applicant.shared.globalRevenue"]').eq(0);
    }

    get NonUSRevenueAmount(){

        return cy.get('input.tru-number-input[placeholder="Non US Revenue Percentage (%)"]');
    }

    get EEARevenue(){

        return cy.get('input[type="radio"][name="applicant.datalock.eeaRevenue"]').eq(0);
    }

    get HighRiskTerritories(){

        return cy.get('input[type="radio"][name="applicant.datalock.highRiskTerritories"]').eq(1);
    }

    get IncludeTRIA(){

        return cy.get('input[type="radio"][name="applicant.datalock.includeTria"]').eq(1);
    } 

    get ChangeInBusinessActivities(){

        return cy.get('input[type="radio"][name="applicant.bbr.mergerAcquisition"]').eq(1);
    } 

    get TypeOfCoverage(){

        return cy.get('span.ant-select-selection-placeholder').contains('Type of Coverage');
     
     }  

     get SelectCoverage(){

         return cy.get('.ant-select-item-option-content').contains("ADMITTED");  
     }
     

}

module.exports = new AppFormPage();