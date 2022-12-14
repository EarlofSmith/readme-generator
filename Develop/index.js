// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// add the questions to get inputs from inquirer though node
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the year?',
      name: 'year',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a short discrption of your project, What was your motivation?, Why did you build this project? What problem does it solve?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'credits',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Add a License so other developers know what they can and cannot do with your project. Choose only one.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'IBM PLV', 'ISC', 'MPL 2.0', 'None']
      },
      {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
      },
      {
        type: 'input',
        message: 'Add instructions for contributers.',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter an email for questions.',
        name: 'questions',
      },
  ])
  // takes respones and writes the to a readme markdown file
  .then((response) => {
    fs.writeFile('README.md',generateMarkdown(response), (error) =>
    !error ? console.log('success!')
    : console.log('an error occured'));

    })
  ;

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
