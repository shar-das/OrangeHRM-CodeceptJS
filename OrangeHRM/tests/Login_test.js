const {I, loginPage, utilsConstants} = inject(); 

Feature('Login');

Scenario('Log in with valid credentials',  ({ I }) => {
    I.amOnPage(utilsConstants.links.loginPage);
    loginPage.verifyPageElements();
    loginPage.loginAs(loginPage.validUser);
})
    .tag('@login');
