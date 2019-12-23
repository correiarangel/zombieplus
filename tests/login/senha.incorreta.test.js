module.exports = {

    'senha incorreta /;-[': (browser) => {

        let login = browser.page.login()

        login
            .with('rangel@bol.com.br','wweer123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}

