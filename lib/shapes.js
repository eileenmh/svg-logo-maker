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
    return `
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="${this.color}" />
      <text x="150" y="100" text-anchor="middle" fill="white" font-size="85" dominant-baseline="middle">${text}</text>
  </svg>`;
  }
}
class Circle extends Shape {
  constructor() {}
}
class Square extends Shape {
  constructor() {}
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
