pipeline {
    agent {
        docker { 
            image "qaninja/node-wd"
            //args "--network=skynet"    
        }
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
            post {
               always {
                    junit testDataPublishers:[[ $class: 'AttachmentPublisher' ]], testResults: "tests_output/**/*.xml"
               }
            }
        }
    }
}