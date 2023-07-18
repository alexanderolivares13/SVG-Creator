const inquirer = require("inquirer");
const fs = require("fs");
//only importing the shape handler, as it uses the user data to create and return the SVG syntax.
const { shapeHandler } = require("./lib/shapes");

// all the questions that will be used by inquirer, I added in some break points at the end of the questions for readability.
const questions = [
  {
    message:
      "Hello! Welcome to my CLI SVG Generator, answer a few short questions to create your own SVG from a 3 pre-selected shapes. Simply answer a few questions, and the CLI program will create the graphic for you!\n",
    name: "welcome",
  },
  {
    message: "What shape would you like to use?\n",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
    message:
      "What color would you like the shape to be?\n(You can use any color keyword or any Hexadecimal value including the #)\n",
    type: "input",
    name: "color",
  },
  {
    // this question returns a boolean value as it will ask a 2nd follow up question if the user answers yes.
    message: "Would you like your SVG shape to have an outline?\n",
    type: "confirm",
    name: "stroke",
  },
  {
    // the follow up question will only be asked if the user answers yes to the previous question.
    message:
      "What color would you like the outline to be?\n(You can use any color keyword or any Hexadecimal value including the #)\n",
    type: "input",
    default: "",
    name: "strokeColor",
    when: (response) => response.stroke === true,
  },
  {
    // the validate property here inserts a function that doesn't let the user input more than 3 characters.
    message: "What 3 characters would you like your SVG to display?\n",
    type: "input",
    name: "text",
    validate: function (input) {
      if (input.length > 3) {
        return "Only 3 characters should be used";
      } else {
        return true;
      }
    },
  },
  {
    message:
      "What color would you like the text to be?\n(You can use any color keyword or any Hexadecimal value including the #)\n",
    type: "input",
    name: "textColor",
  },
];

// this function creates the svg file to the example folder by calling the shapeHandler function that is imported from the shapes.js file.
function writeToFile(data) {
  fs.writeFile(`./examples/logo.svg`, shapeHandler(data), (err) =>
    err ? console.log(err) : console.info("Generated logo.svg")
  );
}

// the function init calls the inquirer prompt then passes in the questions object arra, and returns the data to be used to write the SVG file.
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    writeToFile(data);
  });
}

// invoking the init function. begin the question prompt by opening bash/terminal and typing ``` node index.js ```
init();
