import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InputsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $(`//input[@type='number']`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async inputs (username: string) {
        await this.inputUsername.setValue(username);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('inputs');
    }
}

export default new InputsPage();
