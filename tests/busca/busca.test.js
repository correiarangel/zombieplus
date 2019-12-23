import pg from '../../lib/db'
//const pg = require('../../lib/db')
let movieData = {}
module.exports = {

    before: function(browser){
        movieData = {
            title: 'Meu namorado é um Zumbi',
            status: 'Disponível',
            year:'2013',
            releaseDate:'01/06/2013',
            cast: ['Nicolas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Bob Corddry'],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'Em um mundo pós-apocalíptico , um zumbi romantico se apoixona por uma humana.'
        }
        //Deleta massa de teste em db 
       pg.removeByTitle(movieData.title).then(function(){
           pg.insertMovie( movieData )
       })
        //console.log(`Deleteu massa de dados com titulo ${ movieData.title }`)
        //loga e testa se esta ligado
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('rangel@bol.com.br','gato18')
        sidebar.expectLoggedUser('Rangel') 
    },
    'Quando eu faço a busca pelo titulo':function(browser){
        let movie = browser.page.movie()

        movie
        .setValue('@searchInput',movieData.title)
        .click('@searchIcon')
    },
    'Então o titulo buscado deve ser exibido na lista': function(browser){
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@tr',10000)
            .expect.elements('@tr').count.to.equal(1)
        movie.assert.containsText('@tr',movieData.title)    
    }
}