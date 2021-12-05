// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//FIXME: RETURN AN EMPTY STRING IF NO BADGES ARE CHOSEN
function renderLicenseBadge(data) {
  if (data.projectLiscences == "None") {
    return "";
  } else {
    return `![Badge](https://img.shields.io/badge/License-${data.projectLiscences}-blueviolet)`;
  }
}

function liscenceOrNot(data) {
  if (data.projectLiscences == "None") {
    return `This application is not covered under any liscence`;
  } else {
    return `This application is covered under the ${data.projectLiscences} liscence`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

${renderLicenseBadge(data)}

## Description

${data.projectDescription}

## Table of contents

+ [Usage](#usage)
+ [Liscence](#liscence)
+ [Contributions](#contributions)
+ [Tests](#tests)
+ [Questions](#questions)

## Usage

${data.projectUsage}

## Liscence

${liscenceOrNot(data)}

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
