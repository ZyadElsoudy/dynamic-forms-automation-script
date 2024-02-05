import NewRequestPage from "../Pages/new-request-page.cy.js";
class NewRequestTest{
    CreateNewRequest(){
        NewRequestPage.AddBtn.click();
        NewRequestPage.selectNewReq.click();
        NewRequestPage.SelectClient.click();
        NewRequestPage.SelectClient.type('zooz')
        NewRequestPage.searchresult.click();
        NewRequestPage.SelectBranch.click();
        NewRequestPage.SelectedBranch.click();
        NewRequestPage.ContinueBtn.click();
    }

}
module.exports=new NewRequestTest();