const BasePage = require('./base.page.js');

const inputFieldAndButton_url = '2022/05/input-field-and-button.html';
const usernameFieldXpath = "//input[@id='user']";
const submitBtnXpath = "//button[@name='submit_action']";
const nameTextAreaXpath = "//textarea[@id='enteredName']";
const inputFieldAndButtonPageTitleXpath = "//h3[@class = 'post-title entry-title' and contains(text(), 'Elements')]";

class InputFieldAndButtonPage extends BasePage {
    get usernameField() { return $(usernameFieldXpath) }
    get submitBtn() { return $(submitBtnXpath) }
    get nameTextArea() { return $(nameTextAreaXpath) }
    get inputFieldAndButtonPageTitle() { return $(inputFieldAndButtonPageTitleXpath) }

    async open() {
        await super.open(inputFieldAndButton_url)
    }

    async waitForInputFieldAndButtonPageTitle() {
        await this.inputFieldAndButtonPageTitle.waitForDisplayed({ timeout: 100000 })
    }

    async enterUserName(name) {
        await this.usernameField.waitForDisplayed({ timeout: 100000 })
        await this.usernameField.setValue(name)
    }

    async clickSubmitBtn() {
        await this.submitBtn
            .waitForDisplayed({ timeout: 100000 });
        await this.submitBtn
            .click();
    }

    async getTextFromNameTextArea() {
        return await this.nameTextArea.getText()
    }
}

module.exports = new InputFieldAndButtonPage();