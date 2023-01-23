// function to generate markdown for README
// TODO think about the license badge
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## License
Licensed under ${answers.license}
`;
}

module.exports = generateMarkdown;
