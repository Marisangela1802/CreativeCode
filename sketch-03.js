const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

//Não preciso das funções abaixo porque importei a biblioteca de funções

// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'white';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 18;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      // x = cx + radius * Math.sin(angle);
      // y = cy + radius * Math.cos(angle);
      //Posso usar esse de cima ou o de baixo/ caso escolha o de baixo preciso adicionar um translate
      //com os valores de cx e cy
      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      context.save();
      context.translate(cx, cy);
      context.translate(x, y);
      // context.rotate(0.3);
      //Acima: numero em radiano
      //Abaixo: numero em grau
      // context.rotate(45 / 180 * Math.PI);
      //Abaixo: usando graus utilizando a função
      context.rotate(-angle);
      context.scale(random.range(8, 2), random.range(0.9, 5));


      context.beginPath();
      context.rect(-w * 0.5, random.range(0, h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      // context.arc(0,0, radius.random(0.7, 1.3), slice * -0.3, slice * 0.3); --> Posso usar assim também
      context.arc(0, 0, random.range(radius * 0.7, radius * 1.3), slice * random.range(0, 0.5), slice * random.range(0.5));
      context.strokeStyle = "white"
      context.stroke();



      context.restore();

    }



  };
};

canvasSketch(sketch, settings);
