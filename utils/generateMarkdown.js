// TODO think about the license badge
// TODO construct a table of contents

function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${answers.installation}

## Usage
${answers.usage}


## License
Licensed under ${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
You can find me [here](https://github.com/${answers.github})

You can reach me at ${answers.email}`;
}

module.exports = generateMarkdown;
