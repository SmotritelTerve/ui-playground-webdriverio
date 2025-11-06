const isElementExisting = async (selector) => {
    const element = await $(selector);
    let existingOfElement;

    const existing = await element.isExisting();
    const displayed = await element.isDisplayed();
    const numberOfElements = await $$(selector).length;

    if(
        existing == 'true' ||
        displayed == 'true' ||
        numberOfElements > 0
    )
    {
        existingOfElement = true;
    }

    return existingOfElement;
}

module.exports = {
    isElementExisting,
}