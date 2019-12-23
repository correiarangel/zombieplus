var loginActions = {
    with: function(email,password){
        return this
            .navigate()
            .waitForElementVisible('@form',3000)
            .setValue('@emailInput',email)
            .setValue('@passInput',password)
            .click('@loginButton')
    },
    expectAlertDanger: function ( msg ) {
        return this
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', msg)
    
    },
    expectAlertInfo: function ( msg ) {
        return this
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', msg)
    
    }
}

module.exports = {

    url:'/login',
    commands:[ loginActions ],
    elements:{
        form:'.card-login',
        emailInput:'input[name=email]',
        passInput:'input[name=password]',
        loginButton:'.login-button',
        alertDanger:'.alert-danger',
        alertInfo:'.alert-info'
    }

}
