// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badges = {
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  APACHE: `[![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  GPL: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  BSD: `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  IBM: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
  ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
  None: `No license has been chosen.`,
}

function renderLicenseBadge(license) {
  if (license == "MIT")
  return badges.MIT;
  if (license == "APACHE")
  return badges.APACHE;
  if (license == "MIT")
  return badges.MIT;
  if (license == "MIT")
  return badges.MIT;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage) 
  * [credits](#credits)
  * [license](#license)
  * [features](#features)
  * [contribute](#contribute)
  * [badges](#badges)


  ## Installation Instructions
  * ${data.installation}

  ## Usage
  * ${data.useage}

  ## Credits 
  * ${data.credits}

  ## License
  * ${data.license}

  ## Features
  * ${data.features}

  ## Contribute
  * ${data.contribute}

`;
}

module.exports = generateMarkdown;
