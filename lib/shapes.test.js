const { describe } = require("node:test");
const Shapes = require("./shapes");


describe('Triangle', () => {
    test('it should render the triangle string with the set color', () => {
        let expectedSyntax = `<polygon points="150,0 290, 200 10, 200" fill="blue"/>`;
        const shape = new Shapes.Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Square', () => {
    test('it should render the Square string with the set color', () => {
        let expectedSyntax = `<rect x="50" y="5" width="200" height="200" fill="blue"/>`;
        const shape = new Shapes.Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

describe('Circle', () => {
    test('it should render the Circle string with the set color', () => {
        let expectedSyntax = `<circle cx="150" cy="100" r="80" fill="blue"/>`;
        const shape = new Shapes.Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(expectedSyntax);
    })
})

