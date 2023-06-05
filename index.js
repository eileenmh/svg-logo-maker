const fse = require("fs-extra");
const { Triangle, Circle, Square } = require("./lib/shapes");

const inquirer = require("inquirer");

function init() {
  console.log("Answer the following prompts to create a SVG Logo!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "characters",
        message:
          "Enter up to three characters. The characters will be placed in the center of the logo.",
      },
      {
        type: "input",
        name: "color",
        message: "Enter the color you want the logo to be.",
      },
      {
        type: "list",
        name: "shape",
        message: "Select the shape you want the logo to be.",
        choices: ["circle", "triangle", "square"],
      },
    ])
    .then();
}

// init();
