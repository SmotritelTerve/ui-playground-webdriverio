const HomePage = require('../../src/po/pages/home.page');

describe('UI Playground', () => {
    it('should have UI Playground title - Smoke', async () => {
        HomePage.open()
        await expect(browser).toHaveTitle('UI Playground');
    })
})