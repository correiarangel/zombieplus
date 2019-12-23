require('babel-core/register')
require('geckodriver')

const chromedriver = require('chromedriver')

const url_defualt = 'http://zombie-web:5000'
const timeoutDefault = 15000


module.exports = {
    //src_folders:['tests/busca'],
    src_folders:['tests'],

    page_objects_path:'./pages',
    global_path:'./hooks/globals.js',

    webdriver:{
        start_process: true,
    } ,
/*
Permite executar varias instacias simultaneas

test_workers: {
        enabled:true,
        workers: 4
    },
*/
    test_settings:{
        default:{
            launch_url:url_defualt,
            globals:{
                waitForConditionTimeout:timeoutDefault //TimeMeuot padrão
            },
            webdriver:{
                //server_path:'./node_modules/.bin/chromedriver',
                server_path:chromedriver.path,
                port:9515
            } ,
            desiredCapabilities:{
                browserName: "chrome"
            }
        },
    

        firefox: {
            launch_url:url_defualt,
            globals:{
                waitForConditionTimeout:timeoutDefault //TimeMeuot padrão
            },
            webdriver:{
                server_path:'./node_modules/.bin/geckodriver',
                port:4444
            } ,
            desiredCapabilities:{
                browserName: "firefox",
                acceptInsecureCerts: true
            }
        },

        headless: {
            lauch_url:url_defualt,
            globals:{
                waitForConditionTimeout:timeoutDefault //TimeMeuot padrão
            },
            webdriver:{
                //server_path:'./node_modules/.bin/chromedriver',
                server_path:chromedriver.path,
                port:9515
            } ,
            desiredCapabilities:{
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                     args: ['--headless', '--no-sandbox']
                }
            }
            
        },

        stage:{
            lauch_url:"http://url.stoge.zombiplus.com.br"
        }
    } //end test_settings   
}