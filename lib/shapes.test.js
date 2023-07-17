const { describe } = require("node:test");
const Shapes = require("./shapes");


describe('Triangle', () => {
    test('it should render the triangle string with the set fill color, text color, and custom text', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,0 290, 200 10, 200" fill="blue" stroke="" stroke-width="3" />
      
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`;
        const shape = new Shapes.Triangle();
        shape.setColor("blue");
        shape.setTextColor("white");
        shape.setText("SVG");
        shape.setStrokeColor("");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Square', () => {
    test('it should render the Square string with the set color', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="50" y="5" width="200" height="200" fill="blue" stroke="" stroke-width="3"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    
    </svg>/>`;
        const shape = new Shapes.Square();
        shape.setColor("blue");
        shape.setTextColor("white");
        shape.setText("SVG");
        shape.setStrokeColor("");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Circle', () => {
    test('it should render the Circle string with the set color', () => {
        let expectedSyntax = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" stroke="" stroke-width="3"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`;
        const shape = new Shapes.Circle();
        shape.setColor("blue");
        shape.setTextColor("white");
        shape.setText("SVG");
        shape.setStrokeColor("");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

