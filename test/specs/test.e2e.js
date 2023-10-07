const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
 

describe('My Login application', () => {
    it('should be able to open the website and browse', async () => {
        await LoginPage.open()
        await browser.maximizeWindow();//set full size of window
        await browser.pause(7000);
        await browser.setWindowSize(1200, 800);//set specific window size
        await browser.minimizeWindow();
        await browser.pause(7000);
    })
})
