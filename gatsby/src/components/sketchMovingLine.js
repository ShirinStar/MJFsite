export default function SketchMovingLine(p5) {
  let canvas;
  const xspacing = 1; // Distance between each horizontal location
  let w; // Width of entire wave
  let theta = 0.0; // Start angle at 0
  const amplitude = 75.0; // Height of wave
  const period = 250.0; // How many pixels before the wave repeats
  let dx; // Value for incrementing x
  let yvalues; // Using an array to store height values for the wave

  function calcWave() {
    theta += 0.03;
    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = (p5.sin(x) * amplitude * 0.5) / 2;
      x += dx / 1.5;
    }
  }

  function renderWave() {
    p5.noStroke();
    p5.fill(0);
    for (let x = 0; x < yvalues.length; x++) {
      p5.ellipse(x * xspacing, canvas.height / 2 + yvalues[x], 2, 2);
    }
  }
  p5.setup = () => {
    canvas = p5.createCanvas(700, 50);
    p5.noStroke();
    w = canvas.width + 10;
    dx = (p5.TWO_PI / period) * xspacing;
    yvalues = new Array(p5.floor(w / xspacing));
  };

  p5.draw = () => {
    p5.background(229, 227, 220);
    calcWave();
    renderWave();
  };
}
