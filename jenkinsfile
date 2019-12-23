pipeline {
    agent {
        docker { image "qaninja/node-wd"}
    }
    stages('Build') {
        steps {
            sh "npm install"
        }
    }
    stages('Tests') {
        steps {
            sh "npm run test:h"
        }
    }
}