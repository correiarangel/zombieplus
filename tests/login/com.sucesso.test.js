module.exports = {
    
    '@disabled':true,

    '@tags':['smoke'],

    'login com sucesso /;-]': (browser) => {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('rangel@bol.com.br','gato18')
        sidebar.expectLoggedUser('Rangel') 
    }
}

