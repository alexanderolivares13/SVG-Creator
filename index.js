const inquirer = require("inquirer");
// const fs = require("fs");
// const { Circle, Triangle, Square } = require("./lib/shapes");
const questions = [
  {
    message:
      "Hello! Welcome to my CLI SVG Generator, answer a few short questions to create your own SVG from a 3 pre-selected shapes. Simply answer a few questions, and the CLI program will create the graphic for you!",
    name: "welcome",
  },
  {
    message: "What shape would you like to use?",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
      message:
      "What color would you like the shape to be?\n(You can use any color keyword or any Hexadecimal value including the #)",
      type: "input",
      name: "color",
    },
    {
      message: "Would you like your SVG to have an outline?",
      type:"confirm",
      name:"stroke"
    },
    {
      message: "What color would you like the outline to be?\n(You can use any color keyword or any Hexadecimal value including the #)",
      type:"input",
      name:"strokeColor",
      when: (response) => response.stroke === true
    },
    {
    message: "What 3 characters would you like your SVG to display?",
    type: "input",
    name: "logo",
    validate: function (input) {
      if (input.length > 3) {
        return "Only 3 characters should be used";
    } else {
        return true;
    }
},
  },
//   {
//     message: "",
//     type:"",
//     name:""
//   },
//   {
//     message: "",
//     type:"",
//     name:""
//   },
//   {
//     message: "",
//     type:"",
//     name:""
//   },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    console.info(data);
  });
}

init();
