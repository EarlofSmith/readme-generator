//  this creates a license link and a badge all in one array for use
const badges = {
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`,
  APACHE: `[![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  GPL: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  BSD: `[![License: BSD](https://img.shields.io/badge/License-BSD%203%20Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  IBM: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
  ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
  MPL: `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`,

  None: `No license has been chosen.`,
}
// this function returns the license choice from input and add correct one from array
function renderLicenseBadge(license) {
  if (license == "MIT")
  return badges.MIT;
  if (license == "APACHE 2.0")
  return badges.APACHE;
  if (license == "GPL 3.0")
  return badges.GPL;
  if (license == "BSD 3")
  return badges.BSD;
  if (license == "IBM PLV")
  return badges.IBM;
  if (license == "ISC")
  return badges.ISC;
  if (license == "MPL 2.0")
  return badges.MPL;
  if (license == "None")
  return badges.None;
  console.log(license)
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
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage) 
  * [credits](#credits)
  * [license](#license)
  * [features](#features)
  * [contribute](#contribute)
  * [badges](#badges)


  ## Description
  * ${data.description}

  ## Installation Instructions
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## Credits 
  * ${data.credits}

  ## License
  * ${renderLicenseBadge(data.license)}

  ## Features
  * ${data.features}

  ## Contribute
  * ${data.contribute}

  ## Badges
  * got here to create custom badges [shields.io](https://shields.io/)

`;
}

module.exports = generateMarkdown;
