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
      stage('SonarQube Analysis') {
        
    def scannerHome = tool 'SonarScanner';
        
          steps{ 
            
            withSonarQubeEnv() 
      
            sh "${scannerHome}/bin/sonar-scanner"
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
