const fse = require("fs-extra");
const { Triangle, Circle, Square } = require("./lib/shapes");

const inquirer = require("inquirer");

function init() {
  console.log("Answer the following prompts to create a SVG Logo!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
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
    .then((answers) => {
      function createLogo(shape) {
        const Logo = new shape(answers.text, answers.color);
        fse.writeFile("./output/logo.svg", Logo.render(), (err) => {
          if (err) {
            console.error(err);
          }
        });
      }

      switch (answers.shape) {
        case "circle":
          createLogo(Circle);
          break;
        case "triangle":
          createLogo(Triangle);
          break;
        case "square":
          createLogo(Square);
          break;
      }
    });
}

init();
