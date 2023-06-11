// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")

//no blank answers to questions 
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    //title 
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project?",
        validate: validateInput,
    },
    // Project Description 
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: validateInput,
    },
    // table of contents in markdown js 

    //installation question 
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
        validate: validateInput,
    },
    //Question for usage 
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
        validate: validateInput,
    },
    // question for license 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
