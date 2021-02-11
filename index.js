const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');
const util = require('./utils/generateReadMe');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project about? Give a detailed descriptiion of your process.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are thee installation instructions for this project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Explain how to run the automated tests for this system.',
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
      'Apache License v2.0',
      'GNU v3.0',
      'MIT License',
    ],
  },
  {
    type: 'input',
    name: 'git',
    message: 'Enter your github URL.',
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
  }]

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
