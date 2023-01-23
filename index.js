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
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((gizem) => {
      const markdown = generateMarkdown(gizem);
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
