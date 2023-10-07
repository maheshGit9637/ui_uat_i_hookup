const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get head1 () {
        return $('h1');
    }

    get head2 () {
        return $('h2');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async headers1 () {
        const h1=(await this.head1).getText();
        return h1;
    }

    async headers () {
        const h2=(await this.head2).getText();
        return h2;
    }
     

    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new HomePage();
