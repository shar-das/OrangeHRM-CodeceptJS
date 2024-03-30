const {I} = inject();
module.exports = {

    links: {
        loginPage: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    },
    
    credentials: {
        validUser: {
            username: 'Admin',
            password: 'admin123',
        },
    },

    waits: {
        shortWait: 10,
        longWait: 20,
    },

    loginPage: {
        headings: {
            login: 'Login',
            username: 'Username',
            password: 'Password',
        },
        texts: {
            forgotPassword: 'Forgot your password?',
        },
    },
};