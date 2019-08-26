pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './scripts/test'
            }
        }
        stage('Deploy') {
            steps {
                sh './scripts/deploy'
            }
        }
    }
    post { 
        success {
            slackSend channel: '#jenkins-ci-cd',
            color: 'good',
            message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}"
            }
    }
}
