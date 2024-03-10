import AppFormPage from "../Pages/app-form-page.cy.js";
import QuoteScreenpage from "../Pages/quote-screen-page.cy.js";
class BBRRequestTest{
    SubmitBBRRequestOnly(){
        AppFormPage.jumpToApplicantSection.click();
        cy.wait(5000)
        AppFormPage.CloseCoallition.click();
        AppFormPage.CloseDataLock.click();
        AppFormPage.CloseCFC.click();
        AppFormPage.CloseEverest.click();
                                                    //Applicant Part//
        //Type a value in  Legal company name
        AppFormPage.LegalCompanyName.type("Company name is confidential");
        // Type a value in the address field
        AppFormPage.SearchForAddress.type("123 William St, New York, NY 10038, USA{enter}");
        // Type a value in Website field
        AppFormPage.Website.type("www.google.com");
        // type a value in client name filed 
        AppFormPage.ClientContentName.type("Client name");
        // type a value in client email filed 
        AppFormPage.ClientEmailAddress.type("Testemail@gmail.com");
        // open IndustryType drop down list 
        AppFormPage.IndustryType.click();
        // select industry type from drop down list 
        AppFormPage.SelectIndustryType.click();
        // add num of employees
        AppFormPage.NumberOfEmployees.type('3');
        //remove the added number to add new on for Number of Non US Employees
        AppFormPage.NumberOfNonUSEmployees.dblclick().clear();
        //add new number of Number of Non US Employees
        AppFormPage.NumberOfNonUSEmployees.type('3');
        // add Annual Revenue for the last complete financial year $
        AppFormPage.AnnualRevenueLastFinancialYear.type('200000');
        // add Non US Revenue with -> selection yes
        AppFormPage.NonUSRevenue.click({force:true});
        // clear the exist amount of zero for Non US Revenue Percentage (%)
        AppFormPage.NonUSRevenueAmount.dblclick().clear();
        //add new amount for Non US Revenue Percentage (%)
        AppFormPage.NonUSRevenueAmount.type('20');
        // add Change in Business Activities with-> selection yes
        AppFormPage.ChangeInBusinessActivities.click();
                                                    // Cyber Risk part //
        // add Performs Regular Backups with  -> selection yes
        AppFormPage.PerformsRegularBackups.click();
        // add Uses Email Filtering with  -> selection yes
        AppFormPage.EmailFiltering.click();
        // add Access web-based email with  -> selection yes
        AppFormPage.AccessWebBasedEmail.click();
        // add Uses Anti-Virus and Anti-Threat Protection with -> selection yes
        AppFormPage.AntiVirus.click();
        // add Manages Critical Patching on a Schedule with -> selection yes
        AppFormPage.CriticalPatching.click();
        // Select Remote Network Access with -> selection yes
        AppFormPage.RemoteNetworkAccess.click();
        // Select Administrator and Privileged accounts -> selection No
        AppFormPage.AdministratorAndPrivilegedAccounts.click();
        // Select External Remote Desktop Protocol -> selection No
        AppFormPage.ExternalRemoteDesktopProtocols.click();
        // Select Independent contractors and vendors accessing the network -> selection No
        AppFormPage.IndependentContractors.click();
        // Select All email accounts -> selection Yes
        AppFormPage.AllEmailAccounts.click();
        // Select Perform Cyber Security Training -> selection Yes
        AppFormPage.PerformCyberSecurityTraining.click();
        // Select Takedown Procedures  -> selection Yes
        AppFormPage.TakedownProcedures.click();
        // Select Formal Review Broadcast  -> selection Yes
        AppFormPage.FormalReviewBroadcast.click();
        // Select Formal Review Supervised  -> selection Yes
        AppFormPage.FormalReviewSupervised.click();
                                                        // Claims part //
        // select Aware of Possible Pending Claims -> selection (yes)
        AppFormPage.AwareOfPossiblePendingClaims.click();
        // select BBR Additional Claim Question -> selection (yes)
        AppFormPage.BbrAdditionalClaim.click();
                                                        // Coverage part //
        // select Effective Date 
        AppFormPage.EffectiveDate.click();
        AppFormPage.scrollToNextMonth.click();
        AppFormPage.SelectedeffectiveDate.click();
        // select Beazly Limit with value $ 3,000,000
        AppFormPage.Beazlyalimit.click({force:true});
        AppFormPage.SelectedBeazlylimit.click();
        // select Beazly Retention with value $ 50,000
        AppFormPage.BeazlyaRetention.click({force:true});
        AppFormPage.SelectedBeazlyRetention.click();
                                                        // Get a Quate // 
        AppFormPage.GetQuoteButton.click();
        QuoteScreenpage.QuotesHeader.should('be.visible');
        QuoteScreenpage.StatusOfmarketReffered.should('be.visible');
    }
}
module.exports=new BBRRequestTest()