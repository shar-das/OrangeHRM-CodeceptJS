const {I, utilsConstants} = inject();

module.exports = {

    //LOCATORS
    inputFields: {
        username: '//input[@name="username"]',
        password: '//input[@name="password"]',
    },
    buttons: {
        login: '//button',
    },
    links: {
        forgotPassword: '//div[@class="orangehrm-login-forgot"]//child::p',
        companyWebsite: '//a[@href="http://www.orangehrm.com"]',
    },
    headings: {
        login: '//h5',
        username: '//input[@name="username"]//preceding::label',
        password: '//input[@name="username"]//following::label',
    },
    images: {
        companyBranding: '//div[@class="orangehrm-login-branding"]//child::img',
        companyLogo: '//div[@class="orangehrm-login-logo"]//child::img',
    },

    //TEST DATA
    validUser: {
        username: utilsConstants.credentials.validUser.username,
        password: utilsConstants.credentials.validUser.password,
    },

    //METHODS
    verifyPageElements() {
        I.waitForElement(this.images.companyBranding, utilsConstants.shortWait);
        I.see(utilsConstants.loginPage.headings.login, this.headings.login);
        I.see(utilsConstants.loginPage.headings.username, this.headings.username);
        I.seeElement(this.inputFields.username);
        I.see(utilsConstants.loginPage.headings.password, this.headings.password);
        I.seeElement(this.inputFields.password);
        I.seeElement(this.buttons.login);
        I.see(utilsConstants.loginPage.texts.forgotPassword, this.links.forgotPassword);
    },

    loginAs(user) {
        I.amOnPage(utilsConstants.links.loginPage);
        I.fillField(this.inputFields.username, user.username);
        I.fillField(this.inputFields.password, user.password);
        I.click(this.buttons.login);
    },
};