import { Given, When } from '@wdio/cucumber-framework';
import InputsPage from '../pageobjects/inputs.page.js';

const pages = {
    inputs: InputsPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I inputs with (\w+)$/, async (username) => {
    await InputsPage.inputs(username)
});