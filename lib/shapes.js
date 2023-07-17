// the shapes class will be all extended by the specific shapes we will create, they will all share the setColor() function in order to fill in the color based on the user input.
class Shapes {
  constructor(response) {
    this.response = response;
    return this.response;
  }
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
  renderText() {
    throw new Error("Function must be called using a child class");
  }
  renderTextColor() {
    throw new Error("Function must be called using a child class");
  }
}

class Triangle extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,0 290, 200 10, 200" fill="${this.setColor(
          this.color
        )}" stroke="${this.setStrokeColor(
      this.strokeColor
    )}" stroke-width="3" />
      
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.setTextColor(
          this.textColor
        )}">${this.setText(this.text)}</text>
      
      </svg>`;
  }
}

class Square extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="50" y="5" width="200" height="200" fill="${this.setColor(
          this.color
        )}" stroke="${this.setStrokeColor(this.strokeColor)}" stroke-width="3"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.setTextColor(
          this.textColor
        )}">${this.setText(this.text)}</text>
    
    </svg>/>`;
  }
}

class Circle extends Shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.setColor(
          this.color
        )}" stroke="${this.setStrokeColor(this.strokeColor)}" stroke-width="3"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.setTextColor(
          this.textColor
        )}">${this.setText(this.text)}</text>
      
      </svg>`;
  }
}
function shapeHandler(data) {
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
  
  userShape.setColor(data.color);
  userShape.setText(data.logo);
  userShape.setTextColor(data.textColor);
  
  if (data.strokeColor) {
    userShape.setStrokeColor(data.strokeColor);
  } else {
    userShape.setStrokeColor("");
  }
   return userShape.render();
}
module.exports = { Circle, Triangle, Square, shapeHandler };
