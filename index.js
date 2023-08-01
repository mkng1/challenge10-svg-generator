// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor(shape, shapeColor, design) {
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
    render() {
        return design
    }
}

class Triangle extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
        this.design = '<polygon points="150, 18 244, 182 56, 182"';
      }

}

class Square extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
        this.design = '<rect x="50" y="0" width="200" height="200"';
      }

}

class Circle extends Shape {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
        this.design = '<circle cx="150" cy="100" r="80"';
      }

}



// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color',
    }];

// TODO: Create a function to write SVG file
const generateSVG = ({ text, textColor, shapeColor }) => 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${design} fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        if (answers.text.length < 4 ) {
            if (answers.shape === 'circle') {
                design = '<circle cx="150" cy="100" r="80"'
            } else if (answers.shape === 'square') {
                design = '<rect x="50" y="0" width="200" height="200"'
            } else if (answers.shape === 'triangle') {
                design = '<polygon points="150, 18 244, 182 56, 182"'
            }
        } else {
            return console.log("the text is too long for the logo");
        }
    const svgContent = generateSVG(answers);
    fs.writeFile('logo.svg', svgContent, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
  });
}

// Function call to initialize app
init();
