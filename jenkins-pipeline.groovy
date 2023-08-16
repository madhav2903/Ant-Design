pipeline {

    agent any

    tools {

        nodejs 'v10.19.0'

    }

    stages {

        stage('check'){

            steps {

        git credentialsId: 'Github', url: 'https://github.com/madhav2903/Ant-Design.git'

            }

        }

        stage('build'){

            steps {

                sh 'npm install'

            }

        }

        stage('executeSonarqubeReport')

        {

            steps {

                sh "npm run sonar"

            }

        }

    }

}
