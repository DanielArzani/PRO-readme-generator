// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Give a description of your project",
    },
    {
      type: "input",
      name: "projectUsage",
      message: "How do you use your project?",
    },
    {
      type: "list",
      name: "projectLiscences",
      message: "What kind of liscence should you project have?",
      choices: ["MIT", "GPL", "Apache", "GNU", "BSD", "None"],
    },
    {
      type: "input",
      name: "projectContributions",
      message: "Who has contributed to your project?",
    },
    {
      type: "input",
      name: "projectTests",
      message: "What tests have you done?",
    },
    {
      type: "input",
      name: "githubUserName",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

questions().then((answers) => {
  fs.writeFile("./dist/ReadMe.md", generateMarkDown(answers), (err) => {
    if (err) throw err;
  });
});
