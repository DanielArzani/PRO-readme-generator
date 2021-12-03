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
      //& When a liscence is chosen, the corresponding badge should appear
      //& Don't forget to add default unto
      type: "checkbox",
      name: "projectLiscences",
      message: "Which Liscences do you want?",
      choices: ["MIT"],
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
  fs.writeFile("ReadMe.md", generateMarkDown(answers), (err) => {
    if (err) throw err;
  });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
