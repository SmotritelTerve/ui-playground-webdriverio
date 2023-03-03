const BasePage = require('./base.page');
const cookieChoiceInfoXpath = "//div[@id='cookieChoiceInfo']";
const cookieChoiceDismissBtnXpath = "//a[@id='cookieChoiceDismiss']";

class HomePage extends BasePage {

    get cookieChoiceInfo() { return $(cookieChoiceInfoXpath) }
    get cookieChoiceDismissBtn() { return $(cookieChoiceDismissBtnXpath) }

    open() {
        super.open("/");
    }

    async closeCookieChoiceInfo() {
        let numberOfCookieChoiceInfo = await this.getNumberOfCookieChoiceInfo();
        if (numberOfCookieChoiceInfo > 0) {
            await this.cookieChoiceDismissBtn.click();
        }

    }

    async getNumberOfCookieChoiceInfo() {
        let numberOfElements = await browser.$$(cookieChoiceDismissBtnXpath).length;
        return numberOfElements;

    }
}

module.exports = new HomePage();