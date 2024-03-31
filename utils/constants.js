const {I} = inject();
module.exports = {

    links: {
        loginPage: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    },
    
    credentials: {
        valid: {
            username: 'Admin',
            password: 'admin123',
        },
        invalid: {
            username: 'admin$$',
            password: 'admin12$$',
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