const {I, loginPage, utilsConstants} = inject(); 

Feature('Login');

Scenario('Log in with valid credentials',  ({ I }) => {
    I.amOnPage(utilsConstants.links.loginPage);
    loginPage.verifyPageElements();
    loginPage.loginAs(loginPage.validUser);
})
    .tag('@login');

Scenario('Log in with invalid username', ({ I }) => {
    I.amOnPage(utilsConstants.links.loginPage);
    loginPage.verifyPageElements();
    loginPage.loginAs(loginPage.invalidUserWrongUsername);
})
    .tag('@login');

Scenario('Log in with invalid password', ({ I }) => {
    I.amOnPage(utilsConstants.links.loginPage);
    loginPage.verifyPageElements();
    loginPage.loginAs(loginPage.invalidUserWrongPassword);
})
    .tag('@login');

Scenario('Log in with invalid username and password', ({ I }) => {
    I.amOnPage(utilsConstants.links.loginPage);
    loginPage.verifyPageElements();
    loginPage.loginAs(loginPage.invalidUserWrongUsernameAndPassword);
})
    .tag('@login');