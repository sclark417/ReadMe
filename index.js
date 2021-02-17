// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
    default: "Generate a README.md file ",
  },

  {
    type: "input",
    message: "What is your repo called?",
    name: "repo",
    default: "GoodREADMEGenerator",
  },

  {
    type: "input",
    message: "How do you describe your Project?.",
    name: "desc",
    default:
      " This application will generate a README.md file for your current project",
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "Step1: Run npm install and Step2: Run node index.js",
  },

  {
    type: "input",
    message: "Write instructions for using your project.",
    name: "usage",
    default:
      "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. ",
  },

  {
    type: "input",
    message: "please enter git hub user names of the contributor",
    name: "contributors",
    default: "Sclark417",
  },

  {
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "test",
    default: "Insert your tests sample here...",
  },
  {
    type: "input",
    message: "In what year are you creating this license?",
    name: "licenseYear",
  },
  {
    type: "input",
    message:
      "What is your name or the name of your organization you would like to create a license under?",
    name: "licenseName",
  },
  {
    type: "rawlist",
    message: "Which type of license would you like for your repo?",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
    ],
    name: "licenseValue",
  },
  {
    type: "confirm",
    message:
      "Would you like to add the Contributor Covenant guidelines for any potential contributors?",
    name: "confirmContributorCovenant",
  },
  {
    type: "input",
    message: "Add any tests here run on your code.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("Readme.md", generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Readme Created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("Readme.md", answers))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
