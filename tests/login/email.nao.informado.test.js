module.exports = {

    'email não informado /;-[':(browser) => {
        let login = browser.page.login()

        login
            .with('','sss123')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}

