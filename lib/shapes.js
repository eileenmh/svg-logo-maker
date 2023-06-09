class Shape {
  constructor(text, color) {
    this.text = text;
    this.color = color;
    this.width = 300;
    this.height = 200;
    this.textFill = "white";
  }
}
class Triangle extends Shape {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    return `<svg 
xmlns="http://www.w3.org/2000/svg"
width="${this.width}" height="${this.height}">
<polygon points="150,0 50,150 250,150" fill="${this.color}" />
<text x="150" y="120" text-anchor="middle" fill="${this.textFill}" font-size="70" dominant-baseline="middle">${this.text}</text>
</svg>`;
  }
}
class Circle extends Shape {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    return `<svg
xmlns="http://www.w3.org/2000/svg"
width="${this.width}" height="${this.height}">
<circle r="100" cx="150" cy="100" fill="${this.color}" />
<text x="150" y="100" text-anchor="middle" fill="${this.textFill}" font-size="85" dominant-baseline="middle">${this.text}</text>
</svg>`;
  }
}
class Square extends Shape {
  constructor(text, color) {
    super(text, color);
  }
  render() {
    return `<svg 
xmlns="http://www.w3.org/2000/svg"
width="${this.width}" height="${this.height}">
<rect x="50" width="200" height="200" fill="${this.color}" />
<text x="150" y="100" text-anchor="middle" fill="${this.textFill}" font-size="90" dominant-baseline="middle">${this.text}</text>
</svg>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
