pipeline {

    agent any

    tools {

        nodejs 'node'

    }

    stages {

        stage('pull-code'){

            steps {

        git credentialsId: 'Github', url: 'https://github.com/madhav2903/Ant-Design.git'

            }

        }

        stage('build'){

            steps {

                sh 'npm install'

            }

        }
      
       stage('SonarQube Analysis') {

            steps {
              
               sh 'npm run sonar'
    }
  }

      
        //stage('executeSonarqubeReport')

       // {

          //  steps {

              //  sh "npm install sonar-scanner"
              //  sh "npm run sonar-scanner"

           // }

      //  }

    }

}
