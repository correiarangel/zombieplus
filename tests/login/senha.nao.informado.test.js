module.exports = {
    
    'senha não informado /;-[':(browser) => {
        let login = browser.page.login()

        login
            .with('rangel@bol.com.br','')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}

