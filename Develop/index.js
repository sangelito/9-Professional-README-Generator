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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
