const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { suite } = require('selenium-webdriver/testing')
const { after } = require('mocha')

suite(function(env) {
  describe('Fill in the Form', function() {
    let driver
    this.timeout(50000)

    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    this.afterEach(async () => await driver.close())

    it('Fill in The Form', async function() {
        await driver.get("https://www.techlistic.com/p/selenium-practice-form.html")
        await driver.findElement(By.name("firstname")).sendKeys('Débora')
        await driver.findElement(By.name("lastname")).sendKeys('Souto')
        await driver.findElement(By.id("sex-1")).click()
    {
        const element = await driver.findElement(By.id("sex-1"))
        assert(await element.isSelected())
    }
        await driver.findElement(By.id("exp-5")).click()
        await driver.findElement(By.id("datepicker")).sendKeys("24/03/1993")
        await driver.findElement(By.id("profession-1")).click()
    {   
        const element = await driver.findElement(By.id("profession-1"))
        assert(await element.isSelected())
    }
        await driver.findElement(By.id("tool-2")).click()
        await driver.findElement(By.id('continents')).click()
        await driver.findElement(By.xpath('//*[@id="continents"]/option[1]')).click()
        await driver.findElement(By.id('submit')).click()asdsd
})

})

})