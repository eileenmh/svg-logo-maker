const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle.render()", () => {
  it("should return a string for a blue triangle svg file", () => {
    const testTriangle = new Triangle("abc", "blue");
    expect(testTriangle.render()).toEqual(
      `<svg 
xmlns="http://www.w3.org/2000/svg"
width="300" height="200">
<polygon points="150,0 50,150 250,150" fill="blue" />
<text x="150" y="120" text-anchor="middle" fill="white" font-size="70" dominant-baseline="middle">abc</text>
</svg>`
    );
  });
});

describe("Circle.render()", () => {
  it("should return a string for a blue circle svg file", () => {
    const testCircle = new Circle("abc", "blue");
    expect(testCircle.render()).toEqual(
      `<svg
xmlns="http://www.w3.org/2000/svg"
width="300" height="200">
<circle r="100" cx="150" cy="100" fill="blue" />
<text x="150" y="100" text-anchor="middle" fill="white" font-size="85" dominant-baseline="middle">abc</text>
</svg>`
    );
  });
});

describe("Square.render()", () => {
  it("should return a string for a blue square svg file", () => {
    const testSquare = new Square("abc", "blue");
    expect(testSquare.render()).toEqual(
      `<svg 
xmlns="http://www.w3.org/2000/svg"
width="300" height="200">
<rect x="50" width="200" height="200" fill="blue" />
<text x="150" y="100" text-anchor="middle" fill="white" font-size="90" dominant-baseline="middle">abc</text>
</svg>`
    );
  });
});
