module.exports = {
        //holks
        beforeEach:(browser,done) => {
            browser.resizeWindow(1360,768)
            done()
        },
    
        afterEach:(browser,done) => {
            browser.end()
            done()
        },
}