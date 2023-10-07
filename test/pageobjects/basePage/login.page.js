const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async scrollToBottom(){
        await browser.scroll(0,500);
     }

    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new LoginPage();
