import { driver } from '../support/hooks.mjs'
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Bing Search', function() {
  it('should search for puppies', async function() {
    await driver.get('https://www.bing.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('puppies');
    await searchBox.submit();
    await driver.wait(until.titleContains('puppies'));
    const title = await driver.getTitle();
    expect(title).to.include('puppies');
  });
});
