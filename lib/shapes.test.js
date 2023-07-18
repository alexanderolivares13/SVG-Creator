const {Triangle, Circle, Square} = require("./shapes");

// the following tests check for the functionality of the different Shape classes. 
// run npm test to check to see if they pass.
describe('Triangle', () => {
    test('it should render the triangle string with the set fill color, text color, and custom text', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,3 290, 195 10, 195" fill="blue" stroke="black" stroke-width="3" />
      
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="#FFF">SVG</text>
      
      </svg>`;
      // you can change the "fill=blue" value in the template literal to a different color, then pass in the same color into the setColor() function to test if different colors or hex values work.
        const shape = new Triangle();
        // we invoke all the "set" functions to set the values that the shape.render() function will use. The values passed in will be set and the returned syntax will match the expectedSyntax that is displayed above.
        shape.setColor("blue");
        shape.setTextColor("#FFF");
        shape.setText("SVG");
        shape.setStrokeColor("black");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Square', () => {
    test('it should render the Square string with the set color, text color, and custom text', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="50" y="5" width="200" height="190" fill="blue" stroke="" stroke-width="3"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    
    </svg>/>`;
    // you can change the "fill=blue" value in the template literal to a different color, then pass in the same color into the setColor() function to test if different colors or hex values work.
        const shape = new Square();
        // we invoke all the "set" functions to set the values that the shape.render() function will use. The values passed in will be set and the returned syntax will match the expectedSyntax that is displayed above.
        shape.setColor("blue");
        shape.setTextColor("white");
        shape.setText("SVG");
        shape.setStrokeColor("");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Circle', () => {
    test('it should render the Circle string with the set color, text color, and custom text', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" stroke="" stroke-width="3"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`;
      // you can change the "fill=blue" value in the template literal to a different color, then pass in the same color into the setColor() function to test if different key color values or hex values work.
        const shape = new Circle();
        // we invoke all the "set" functions to set the values that the shape.render() function will use. The values passed in will be set and the returned syntax will match the expectedSyntax that is displayed above.
        shape.setColor("blue");
        shape.setTextColor("white");
        shape.setText("SVG");
        shape.setStrokeColor("");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})
