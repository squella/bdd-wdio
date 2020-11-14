const { iframe, acceptBtnInitialPopUp, seachBar, listOfresult } = require('../../pages/google')
const { oliverEvansParagraph } = require('../../pages/wikipediaAutomation')
const expect = require('chai').expect
const { clickElement, putValue } = require('../support/tools')


module.exports = {

    googlePage: async() => {
        await browser.maximizeWindow()
        await browser.url('/')
        const window = await $(iframe)
        await browser.switchToFrame(window)
        await clickElement(acceptBtnInitialPopUp)
        const google = await browser.getTitle()
        await expect(google).to.be.equal('Google')
    },
    search: async(word) => {
        await putValue(seachBar, word)
        const ENTER = await browser.keys("\uE007")
        ENTER;
    },

    goToPage: async(reliable) => {
        selectResult = `${listOfresult}//*[contains(text(),"${reliable}")]`
        clickElement(selectResult)
    },

    checkAndSaveInformation: async(data) => {
        const header = await $(oliverEvansParagraph);
        let value = await header.getText()
        await header.scrollIntoView()
        await browser.saveScreenshot('./photos/automationSearch/infoAppearOnTheTop.png')
        let checkInfo = await value.includes(data)
        return checkInfo
    },


}