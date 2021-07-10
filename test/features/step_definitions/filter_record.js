const { expect, assert } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');

let driver;
let selectedBrand;
Before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://localhost:3000/');
});

When("User selects country, and phone brand", { timeout: 30000 }, async () => {
    selectedBrand = await driver.findElement(By.css("#phoneBrand option:last-child")).getText();
    await driver.findElement(By.css("#phoneBrand option:last-child")).click();
});

Then("Records are filtered based on provided criteria and is displayed in the list", async () => {
    await driver.sleep(1500);
    const expectedValue = await driver.findElement(By.css(".list-group .list-group-item:last-child p")).getText();
    assert.equal(expectedValue.indexOf(selectedBrand) > -1, true);
});

After(async () => {
    await driver.quit();
});
