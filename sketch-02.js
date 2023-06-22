const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    let w = 60;
    let h = 60;
    let gap = 20
    let x,y;

    for (let i=0; i < 5; i++) {
      for(let j = 0; j < 5; j++){
        x = 100 + (gap + w) * i
        y = 100 + (gap + w) * j


        context.strokeStyle = 'white'
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        context.beginPath();
        context.rect(x + 8, y + 8, w -16, h - 16);
        context.stroke();
      }
      }
  
   
   
  };
};

canvasSketch(sketch, settings);
