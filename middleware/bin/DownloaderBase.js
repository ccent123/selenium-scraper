const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { Options, ServiceBuilder, setDefaultService } = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

module.exports = {
    Downloader: async (links) =>{
        const service = new ServiceBuilder(chromedriver.path).build();
        setDefaultService(service);
        let driver = await new Builder().withCapabilities(Capabilities.chrome()).setChromeOptions(new Options().addExtensions('./adblock.crx')).build();
        console.log('Beginning downloader at: ' + new Date())
        try {
            for (let i = 0; i < links.length; i++) {
                await driver.sleep(1000);
                await driver.get('https://snaptik.app/en');
                await driver.wait(until.elementLocated(By.id('url')), 2000)
                await driver.findElement(By.id('url')).click();
                await driver.findElement(By.id('url')).sendKeys(links[i]);
                await driver.sleep(1000);
                await driver.findElement(By.id('submiturl')).click();
                await driver.wait(until.elementLocated(By.xpath('//*[@id="download-block"]/div/a[2]')), 5000);
                await driver.findElement(By.css('div.abuttons > a:nth-child(2)')).click();
                await driver.sleep(1000);
            }
        } finally {
            await driver.sleep(3000);
            await driver.quit();
            console.log('Ending downloader at: ' + new Date())
        }
    }
}