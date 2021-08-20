export default function SketchSinLine(p5) {
  let canvas;
  const frameNumber = 80;
  let x = 0;

  p5.setup = () => {
    canvas = p5.createCanvas(1000, 400);
    p5.noStroke();
  };

  p5.draw = () => {
    const timer = p5.float((2.5 * p5.frameCount) / frameNumber);
    x += 2;
    p5.stroke(255);
    p5.strokeWeight(8);

    p5.point(x, 100 + 30 * p5.sin(p5.PI * (timer / 3)));
  };
}
