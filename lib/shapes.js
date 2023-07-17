// the shapes class will be all extended by the specific shapes we will create, they will all share the setColor() function in order to fill in the color based on the user input.
class Shapes {
    setColor(color) {
        this.color = color;
        return this.color;
    }
    setText(text) {
        this.text = text;
        return this.text
    }
    setTextColor(textColor) {
        this.textColor = textColor;
        return this.textColor;
    }
    render() {
        throw new Error("Function must be called using a child class")
    }
    renderText() {
        throw new Error("Function must be called using a child class")
    }
    renderTextColor() {
        throw new Error("Function must be called using a child class")
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,0 290, 200 10, 200" fill="${this.setColor(this.color)}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="50" y="5" width="200" height="200" fill="${this.setColor(this.color)}"/>`
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.setColor(this.color)}"/>`
    }
}

module.exports = {Circle,Triangle,Square};