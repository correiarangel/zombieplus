module.exports = {

    'não cadastrado /;-[' : (browser) => {
        
        let login = browser.page.login()
       
        login
            .with('tito-rangel@bol.com.br','sss123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}

