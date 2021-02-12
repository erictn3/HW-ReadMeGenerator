const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

const generateREADME = require('./utils/generateReadMe');

// array of question objects
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project about? Give a detailed descriptiion of your process.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for this project (ie-dependencies)?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Explain how to run the automated tests for this system (ie. node).',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to this project?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who created this work?',
  },  
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license.',
    choices: [
      'Apache',
      'GNU',
      'MIT',
    ],
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
]

// function for writing the README file
function writeToFile(fileName, data){
  fs.writeFile(fileName, data, function(err){
    console.log(fileName)
    console.log(data)
    if (err) {
      return console.log(err)
    } else {
      console.log("Success!")
    }
  })
}

// function for initializing program
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    writeToFile("README.md", generateREADME(data));
    console.log(data)
  })
}

// call function to initialize program
init()

