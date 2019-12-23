pipeline {
    agent {
        docker { image "qaninja/node-wd"}
    }
    stages {
        stage('Build'){
            steps {
                sh "npm install"
            }
        }
        
    }
    stages {
        stage('Tests'){
            steps {
                sh "npm run test:h"
            }
        }
    }
}