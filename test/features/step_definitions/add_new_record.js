const { expect } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');

let driver;
Before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://localhost:3000/add');
});

When("User provides name, phone number, country and favourite phone brand", { timeout: 30000 }, async () => {
    await driver.findElement(By.id('nameInput')).sendKeys('Sunil Prasai');
    await driver.findElement(By.id('phoneNumberInput')).sendKeys('9800000002');
    await driver.findElement(By.css("#countryInput option:last-child")).click();
    await driver.findElement(By.id('favouritePhoneBrandInput')).sendKeys('iPhone');
});

Then("User press add button to add new record", async () => {
    await driver.findElement(By.id('addNewRecord')).click();
});

Then("New record details is displayed in list", async () => {
    await driver.sleep(1500);
    await driver.findElement(By.id('navHomeLink')).click();
    await driver.wait(until.urlIs("http://localhost:3000/"));
    const expectedValue = await driver.findElement(By.css(".list-group .list-group-item:last-child h6")).getText();
    expect(expectedValue).to.be.equal("Sunil Prasai");
});

After(async () => {
    await driver.quit();
});
