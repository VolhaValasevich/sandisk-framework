exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../*.spec.js'],

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: () => {
        browser.driver.manage().window().maximize();
    }
};