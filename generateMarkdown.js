// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.licenseValue === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.licenseValue === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.licenseValue === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.licenseValue === "Apache License 2.0") {
    return `Licensed under the [Apache License 2.0](LICENSE.txt) license.`;
  } else if (data.licenseValue === "GNU General Public License v3.0") {
    return `Licensed under the [GNU General Public License v3.0](LICENSE.txt) license.`;
  } else if (data.licenseValue === "MIT License") {
    return `Licensed under the [MIT License](LICENSE.txt) license.`;
  } else {
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licenseValue === "Apache License 2.0") {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`;
  } else if (data.licenseValue === "GNU General Public License v3.0") {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`;
  } else if (data.licenseValue === "MIT License") {
    return `Copyright (c) ${data.licenseName}. All rights reserved.`;
  } else {
    return `This repository is not under any licensing.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.username}
## repo title
  ${data.repo}
##repo description
  ${data.desc}
## repo instalation steps
  ${data.install}
## repo usage
  ${data.usage}
## contributors
  ${data.contributors}
## testing
  ${data.test}
## License
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}
  ${renderLicenseBadge(data)}

  

`;
}

module.exports = generateMarkdown;
