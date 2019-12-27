import pg from '../../lib/db'
//const pg = require('../../lib/db');
let movieData = {}

module.exports = {
    //'@disabled':true, desabilita test
   // '@disabled':true,
    
    before: function( browser ){
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year:'2002',
            relesseDate:'01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }
        //Deleta massa de teste em db 
        pg.removeByTitle(movieData.title)
        //loga e testa se esta ligado
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('rangel@bol.com.br','gato18')
        sidebar.expectLoggedUser('Rangel') 
    },
    'quando eu faço o cadastro do filme': function (browser){
        let movie = browser.page.movie()

        movie
            .gooForm()
            .setValue('@titleInput',movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput',movieData.year)
            .setValue('@dateInput',movieData.relesseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput',movieData.plot)
            .uploadCover(movieData.cover)
            .click('@createButton')
        
    },
    'Então devo ver o filme na lista':function ( browser ){
        let movie = browser.page.movie()
        // Visible => Procura o elemento na pagina, mas tambem 
        //procura atributo display  .waitForElementPresent('@tableList',5000)
        //Present => verifica se o elemento esta na pagina
        movie
            .waitForElementVisible('@tableList', 15000)
            .assert.containsText('@tableList', movieData.title)
    }
}