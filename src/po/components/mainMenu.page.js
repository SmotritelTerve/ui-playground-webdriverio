const BasePage = require('../pages/base.page')

const elementsLinkXpath = "//div[@id='PageList2']//a[contains(text(),'Elements')]";

class MainMenuPage extends BasePage {
    get elementsLink () { return $(elementsLinkXpath) }

    async clickElementsLink() {
        await this.elementsLink.click()
    }
}

module.exports = new MainMenuPage();