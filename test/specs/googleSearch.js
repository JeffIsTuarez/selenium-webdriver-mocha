import { driver } from '../support/hooks.mjs'
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Google Search', function() {
  it('should search for Cheese!', async function() {
    await driver.get('https://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Cheese!');
    await searchBox.submit();
    await driver.wait(until.titleContains('Cheese!'));
    const title = await driver.getTitle();
    expect(title).to.include('Cheese');
  });
});
