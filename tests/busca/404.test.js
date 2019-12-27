module.exports = {

    '@tags':['smoke', '404'],

    before: function( browser ) { 

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('rangel@bol.com.br','gato18')
        sidebar.expectLoggedUser('Rangel')
    },
    'Quando eu busco um titulo não cadastrado':function(browser){
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput','O ultimo americano virgem')
            .click('@searchIcon')
    },
    'Então deve ver uma mesagem de aterta': function(browser){
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger',10000)
            .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }

}