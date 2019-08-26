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
        always { 
        echo 'CI CD successful!'
    }
}
}
