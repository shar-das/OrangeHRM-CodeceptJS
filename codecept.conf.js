const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: ['./!(node_modules)/**/**/*_test.js', './!(node_modules)/**/**/**/*_test.js','./*_test.js'],
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: false, //false means headless mode
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      waitForAction: 500,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    utilsConstants: './utils/constants.js',
    loginPage: './OrangeHRM/pages/LoginPage.js',
  },
  name: 'OrangeHRM-CodeceptJS'
}