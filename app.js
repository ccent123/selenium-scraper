const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { Options, ServiceBuilder, setDefaultService } = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const path = require('path');
const fs = require('fs');

const service = new ServiceBuilder(chromedriver.path).build();
setDefaultService(service);
const tiktokLinks = fs.readFileSync('links.txt', 'utf-8');
const arryLinks = tiktokLinks.split(/\r?\n/);
(async function example() {
        let driver = await new Builder().withCapabilities( Capabilities.chrome()).setChromeOptions(new Options().addExtensions('./adblock.crx')).build();
        try {
        for(let i = 0; i < arryLinks.length; i++){
            await driver.sleep(1000);
            await driver.get('https://snaptik.app/en');
            await driver.wait(until.elementLocated(By.id('url')), 2000)
            await driver.findElement(By.id('url')).click();
            await driver.findElement(By.id('url')).sendKeys(arryLinks[i]);
            await driver.sleep(1000);
            await driver.findElement(By.id('submiturl')).click();
            await driver.wait(until.elementLocated(By.xpath('//*[@id="download-block"]/div/a[2]')), 3000);
            await driver.findElement(By.css('div.abuttons > a:nth-child(2)')).click();
            await driver.sleep(1000);
        }
        } finally {
            await driver.quit();
        }
})();