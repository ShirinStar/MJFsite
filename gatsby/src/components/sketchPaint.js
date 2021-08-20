import { window } from 'browser-monads';

export default function SketchPaint(p5) {
  let canvas;

  p5.setup = () => {
    canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.noStroke();
  };

  p5.draw = () => {
    const y = p5.color('coral');

    p5.fill(y);
    p5.circle(45, 5, 5);

    if (p5.mouseIsPressed) {
      p5.fill(p5.color('lightsalmon'));
    } else {
      p5.fill(p5.color('hsl(160, 100%, 50%)'));
    }
    p5.circle(p5.mouseX, p5.mouseY, 70, 70);
  };
}
