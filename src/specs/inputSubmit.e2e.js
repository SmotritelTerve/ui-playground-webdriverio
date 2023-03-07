const HomePage = require('../../src/po/pages/home.page');
const MainMenuPage = require('../../src/po/components/mainMenu.page');
const ElementsPage = require('../../src/po/pages/elements.page');
const InputFieldAndButtonPage = require('../../src/po/pages/inputFieldAndButton.page.js');

const { userName} = require('../../src/testData/formValues');

const textToVerify = `Your name is ${userName}`;
const promptMessage = "Please, enter your name";

describe('Input field and Button page', () => {
  it('should check text with entered name', async () => {
    await HomePage.open()
    await MainMenuPage.clickElementsLink();
    await expect(browser).toHaveTitle('UI Playground: Elements');
    await ElementsPage.clickInputFieldAndButtonLink();
    await expect(browser).toHaveTitle('UI Playground: Input field and Button');

    await InputFieldAndButtonPage.usernameField.setValue(userName);
    await InputFieldAndButtonPage.submitBtn.click();
    await expect(InputFieldAndButtonPage.nameTextArea).toHaveTextContaining(
      textToVerify)
  });

  it('should check prompt when no name was entered', async () => {
    await InputFieldAndButtonPage.usernameField.clearValue();
    await InputFieldAndButtonPage.submitBtn.click();
    await expect(InputFieldAndButtonPage.nameTextArea).toHaveTextContaining(
      promptMessage)
  })
})