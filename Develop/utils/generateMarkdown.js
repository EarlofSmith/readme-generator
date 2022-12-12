// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
