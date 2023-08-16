pipeline {

    agent any

    tools {

        nodejs 'node'

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

                sh "npm install sonarjs"
                sh "npm run sonar"

            }

        }

    }

}
