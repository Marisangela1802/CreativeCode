const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = w * 0.01;

    const w = w * 0.10;
    const h = w * 0.10;
    //lacuna
    const gap = w * 0.02;
    const ix = w * 0.17;
    const iy = w * 0.17;
    let x,y;

    const off = w * 0.02;

    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = ix + (gap + w) * i;
        y = iy + (gap + w) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();


        if (Math.random() > 0.5){

          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();

        }



        }
    }
  };
};

canvasSketch(sketch, settings);
