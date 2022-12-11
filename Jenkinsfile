pipeline {
  agent any

  tools{
    nodejs "node"
  }
  stages{
    stage('Cypress Parallel Test Suite')
    parallel{
      stage('Slave Node1') {
        agent {
          label "remote_node1"
        }
        steps{
          git url: 'https://github.com/Oddinus/cypress-automation-framework.git'
          bat 'npm install'
          bat 'npm update'
          bat 'npm run triggerAllTests-dashboard'
          // bat 'npm run %Script%' //do uruchomienia kilku skryptów testowych jednocześnie po ich określeniu w parametrach projektu w Jenkinsie
        }
      }
      stage('Slave Node2') {
        agent {
          label "remote_node2"
        }
        steps{
          git url: 'https://github.com/Oddinus/cypress-automation-framework.git'
          bat 'npm install'
          bat 'npm update'
          bat 'npm run triggerAllTests-dashboard'
        }
      }
    }
  }
}