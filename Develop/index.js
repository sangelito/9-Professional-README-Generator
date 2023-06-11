// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    //title 
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
