const BasePage = require('./base.page.js');

const boxDivXpath = "//section[@name='boxes']/div";

class AlertsPage extends BasePage {
    get boxDiv() { return $(boxDivXpath) }

    async getNumberOfBoxes() {
        await this.boxDiv.waitForDisplayed({ timeout: 10000 })
        let numberOfElements = await browser.$$(boxDivXpath).length;
        return numberOfElements;
    }
}

module.exports = new AlertsPage();