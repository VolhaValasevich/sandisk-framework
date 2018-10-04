'use strict'
const chai =  require('chai');
const expect = chai.expect;
const step = require('../e2e/step-definitions/util/stepFunctions');

describe('Step Functions', () => {
    
    it('should check is the element is present', async() => {
        await browser.get('https://www.sandisk.com/home');
        const result = await step.isElementPresent('Header > Country Bar > Global Icon');
        expect(result).to.be.true;
    })

    it('should wait for an element', async() => {
        await browser.get('https://www.sandisk.com/home');
        await step.waitUntilPresent('Product List > Results Bar > Selected Category');
        const result = await step.isElementPresent('Product List > Results Bar > Selected Category');
        expect(result).to.be.true;
    })

    it('should get element text', async() => {
        await browser.get('https://www.sandisk.com/home');
        const result = await step.getText('Product List > Results Bar > Selected Category');
        expect(result).to.be.eql('Featured Items');
    })

    it('should send keys to an element', async() => {
        await browser.get('https://www.sandisk.com/home');
        await step.sendKeys('Functional Footer > Solutions Links > Search Container > Footer Search Bar', 'disk');
        await step.sendKeys('Functional Footer > Solutions Links > Search Container > Footer Search Bar', protractor.Key.ENTER);
        const url = await browser.getCurrentUrl();
        expect(url).to.be.eql('https://www.sandisk.com/tools/search?q=disk');
    })
})