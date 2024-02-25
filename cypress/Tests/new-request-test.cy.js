
import NewRequestPage from "../Pages/new-request-page.cy.js";
class NewRequestTest{
    CreateNewRequest(){
        NewRequestPage.AddBtn.click();
        NewRequestPage.selectNewReq.click();
        NewRequestPage.SelectNewRequest.click();
        NewRequestPage.SelectNewRequest.type('us');
        cy.wait(5000);
        NewRequestPage.RequestOption.click();
        NewRequestPage.SelectClient.click();
        NewRequestPage.SelectClient.type('zooz');
        NewRequestPage.searchresult.click();
        NewRequestPage.SelectBranch.click();
        NewRequestPage.SelectedBranch.click();
        NewRequestPage.ContinueBtn.trigger('click');
    }

}
module.exports=new NewRequestTest();