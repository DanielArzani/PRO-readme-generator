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
# ${data.projectTitle}

## Description

${data.projectDescription}

## Table of contents

+ Usage
+ Liscence
+ Contributions
+ Tests
+ Questions

## Usage

${data.projectUsage}

## Liscences

${data.projectLiscences}

## Contributions

${data.projectContributions}

## Tests

${data.projectTests}

## Questions

Link: www.github.com/${data.githubUserName}

If you need to reach me for any additional questions, you can at ${data.email}

  `;
}

module.exports = generateMarkdown;
