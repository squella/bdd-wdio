module.exports = {
    clickElement: async(element) => {
        const elem = await $(element)
        await elem.click()
        elem.waitForExist({ timeout: 5000 });
    },

    putValue: async(element, value) => {
        const elem = await $(element)
        await elem.waitForExist({ timeout: 5000 });
        await elem.setValue(`${value}`)
    },
}