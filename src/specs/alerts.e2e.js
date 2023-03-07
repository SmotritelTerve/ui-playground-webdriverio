expectChai = require('chai').expect;

const HomePage = require('../../src/po/pages/home.page');
const MainMenuPage = require('../../src/po/components/mainMenu.page');
const ElementsPage = require('../../src/po/pages/elements.page');
const AlertsPage = require('../../src/po/pages/alerts.page');

const numberOfBoxesToVerify = 4;

describe('Alerts page', () => {
  it(`should check number of boxes to be ${numberOfBoxesToVerify} - WIP`, async () => {
    await HomePage.open()
    await MainMenuPage.clickElementsLink();
    await expect(browser).toHaveTitle('UI Playground: Elements');
    await ElementsPage.clickAlertsLink();

    await expect(browser).toHaveTitle('UI Playground: Alerts');

    let actualNumberOfBoxes = await AlertsPage.getNumberOfBoxes();
    await expectChai(actualNumberOfBoxes).to.equal(numberOfBoxesToVerify);
  });
})
