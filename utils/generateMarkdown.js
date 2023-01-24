// TODO think about the license badge
function licenseBadge(license) {
  switch (license) {
    case "GNU LGPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    default:
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

${licenseBadge(answers.license)}

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
