const BasePage = require('./base.page.js');

const boxDivXpath = "//input[@id='user']";

class AlertsPage extends BasePage {
    get boxDiv() { return $(boxDivXpath) }

    async getNumberOfBoxes() {
        await this.boxDiv.waitForDisplayed({ timeout: 100000 })
        let numberOfElements = await browser.$$(boxDiv).length;
        return numberOfElements;
    }
}

module.exports = new AlertsPage();