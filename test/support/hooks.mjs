// before and after hooks to set up and tear down 
import { Builder } from 'selenium-webdriver';

let driver;
before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

after(async function() {
    await driver.quit();
  });

export { driver };
