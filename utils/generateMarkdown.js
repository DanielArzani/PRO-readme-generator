// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![Badge](https://img.shields.io/badge/License-${data}-blueviolet)`;
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
# ${data.projectTitle}

${renderLicenseBadge(data.projectLiscences)}

## Description

${data.projectDescription}

## Table of contents

+ [Usage](#usage)
+ [Liscence](#liscences)
+ [Contributions](#contributions)
+ [Tests](#tests)
+ [Questions](#questions)

## Usage

${data.projectUsage}

## Liscences

This application is covered under the ${data.projectLiscences} liscence

## Contributions

${data.projectContributions}

## Tests

${data.projectTests}

## Questions

Link: www.github.com/${data.githubUserName}

If you need to reach me for any additional questions, you can [${
    data.email
  }](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
