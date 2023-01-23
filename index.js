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
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  console.log("in init");
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log({ answers });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error(error);
      } else {
        // Something else went wrong
        console.error(error);
      }
    });
}

console.log("are we here?");

// function call to initialize program
init();

// ask the title of the project using inquirer
// save the title of the project
// create a markdown with title
// save markdown to readme.md
