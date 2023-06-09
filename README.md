# SVG Logo Maker

For this week's challenge, we were asked to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. Using Inquirer, the user is prompted to enter three characters (to represent the business), the color, and to select the shape (either circle, triangle, or square). In the `package.json` file, Jest is listed as a dev dependency, which is a tool that allows a developer to do unit testing during the development process.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Installation

- Download [Node.js](https://nodejs.dev/en/download/). To verify the installation and check for npm, run the following commands in your terminal:

```md
Node --version
npm --version
```

- Download the code for the application from [the repository](https://github.com/eileenmh/svg-logo-maker) as a .zip file and then open it, or clone the repository.
- Next you'll need to install the packages listed in package.json by opening the terminal, changing the directory to the application's root, and then running:

```md
npm install
```

This will download the packages necessary to run the application.

## Usage Information

Make sure you've followed the installation steps before using the app.
To run the application enter the following command while you are in the application's root directory:

```md
node index.js
```

This will start the prompts for generating the logo. If you'd like to run the unit testing, run the following command in the terminal:

```md
npm test
```

## Built With

- [Node.js](https://nodejs.org/en)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Credits

- Project prompt provided by [UNC Coding Bootcamp](https://bootcamp.unc.edu/coding/)
- Created by Eileen Harvey ([@eileenmh](https://github.com/eileenmh))