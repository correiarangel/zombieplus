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
        stage('Tests'){
            steps {
                sh "npm run test:h"
            }
        }
    }
}