// the shapes class will be all extended by the specific shapes we will create, they will all share the setColor() function in order to fill in the color based on the user input.
class Shapes {
  setColor(color) {
    this.color = color;
    return this.color;
  }
  setText(text) {
    this.text = text;
    return this.text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
    return this.textColor;
  }
  setStrokeColor(strokeColor) {
    this.strokeColor = strokeColor;
    return this.strokeColor;
  }
  render() {
    throw new Error("Function must be called using a child class");
  }
}

class Triangle extends Shapes {
    // we redefine the render function in shapes to return the syntax specific to the Triangle SVG shape.
    // the following "this.values" is set by the setColor, setStrokeColor, setTextColor, and setText functions respectfully based on what value is passed in.
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,3 290, 195 10, 195" fill="${this.color}" stroke="${this.strokeColor}" stroke-width="3" />
      
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
  }
}

class Square extends Shapes {
    // we redefine the render function in shapes to return the syntax specific to the Square SVG shape.
    // the following "this.values" is set by the setColor, setStrokeColor, setTextColor, and setText functions respectfully based on what value is passed in.
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="50" y="5" width="200" height="190" fill="${this.color}" stroke="${this.strokeColor}" stroke-width="3"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>/>`;
  }
}

class Circle extends Shapes {
  render() {
    // we redefine the render function in shapes to return the syntax specific to the Circle SVG shape.
    // the following "this.values" is set by the setColor, setStrokeColor, setTextColor, and setText functions respectfully based on what value is passed in.
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" stroke="${this.strokeColor}" stroke-width="3"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
  }
}

//the shape handler function takes in the data object from inquirer with all the user answers and returns the syntax based on the users selections.
function shapeHandler(data) {
// setting userShape as an empty string to be defined as a new instance of one of the Shape constructors depending on what shape the user selected.
  let userShape = "";
  if (data.shape === "Circle") {
    userShape = new Circle();
  }
  if (data.shape === "Triangle") {
    userShape = new Triangle();
  }
  if (data.shape === "Square") {
    userShape = new Square();
  }
  
// we invoke all of the "set" functions after the shape is selected, to set the specific values from the data object that is passed in.
// doing so will set the "this.value" that will be used later by the render function
  userShape.setColor(data.color);
  userShape.setText(data.text);
  userShape.setTextColor(data.textColor);
  
// the if statement checks to see if the strokeColor property exists to invoke and set the color of the outline if the user opted to include it. if it doesn't exist the value is set to an empty string.
// the stroke value in the SVG syntax doesn't assign a default color. So the empty string does not interfere or throw an error.
  if (data.strokeColor) {
    userShape.setStrokeColor(data.strokeColor);
  } else {
    userShape.setStrokeColor("");
  }
// return the SVG syntax using the values that were passed in.
   return userShape.render();
}
module.exports = { Circle, Triangle, Square, shapeHandler };
