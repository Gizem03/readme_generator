const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of the project?",
  },
  {
    type: "editor",
    name: "description",
    message: "Fill out Description",
  },
  {
    type: "editor",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "editor",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose license",
    choices: [
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
    ],
  },
  {
    type: "editor",
    name: "contributing",
    message:
      "If you would like other developers to contribute your project provide guidelines for how to do so.",
  },
  {
    type: "editor",
    name: "tests",
    message: "Provide examples on how to run tests",
  },
  {
    type: "input",
    name: "github",
    message: "Your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Your e-mail",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// function call to initialize program
init();

// ask the title of the project using inquirer - done
// save the title of the project - done
// create a markdown with title
// save markdown to readme.md
