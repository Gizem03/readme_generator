// function to generate markdown for README
// TODO think about the license badge
// TODO construct a table of contents
// TODO finish remaining sections Installation, Usage, Contributing, and Tests
// TODO questions with github username,
// TODO email to questions section
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## License
Licensed under ${answers.license}

## Questions
You can find me [here](https://github.com/${answers.github})`;
}

module.exports = generateMarkdown;
