export default function SketchMovingLine(p5) {
  let canvas;
  const xspacing = 16; // Distance between each horizontal location
  let w; // Width of entire wave
  let theta = 0.0; // Start angle at 0
  const amplitude = 75.0; // Height of wave
  const period = 500.0; // How many pixels before the wave repeats
  let dx; // Value for incrementing x
  let yvalues; // Using an array to store height values for the wave

  function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }
  }

  function renderWave() {
    p5.noStroke();
    p5.fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
      p5.ellipse(x * xspacing, canvas.height / 2 + yvalues[x], 16, 16);
    }
  }
  p5.setup = () => {
    canvas = p5.createCanvas(600, 400);
    p5.noStroke();
    w = canvas.width + 16;
    dx = (p5.TWO_PI / period) * xspacing;
    yvalues = new Array(p5.floor(w / xspacing));
  };

  p5.draw = () => {
    calcWave();
    renderWave();
  };
}
