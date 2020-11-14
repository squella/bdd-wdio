const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect
const { googlePage, search, goToPage, checkAndSaveInformation } = require('./functions')

Given(/^I am on the google page$/, async() => {
    await googlePage()
});

When(/^I search for the key (\w+)$/, async(word) => {
    await search(word)
});

When(/^I am going to the (\w+) result$/, async(reliable) => {
    await goToPage(reliable)
});

Then(/^I check what happened in (\d+)$/, async(data) => {
    let response = await checkAndSaveInformation(data)
    await expect(response).to.be.equals(true)
});