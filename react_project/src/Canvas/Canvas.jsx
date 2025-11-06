import { useRef, useEffect } from 'react';

export function Canvas(props) {
  const canvasRef = useRef(null);

  const draw1 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (20, 60);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(320, 60);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (21, 60);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(319, 60);
    ctx.stroke();
  }

   const draw2 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (20, 170);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(320, 170);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (21, 170);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(319, 170);
    ctx.stroke();
  }


     const draw3 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (20, 280);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(320, 280);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (21, 280);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(319, 280);
    ctx.stroke();
  }


   const draw4 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (60, 20);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(60, 320);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (60, 21);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(60, 319);
    ctx.stroke();
  }
   const draw5 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (170, 20);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(170, 320);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (170, 21);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(170, 319);
    ctx.stroke();
  }
   const draw6 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (280, 20);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(280, 320);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (280, 21);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(280, 319);
    ctx.stroke();
  }

   const draw7 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (20, 20);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(320, 320);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (21, 21);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(319, 319);
    ctx.stroke();
  }

   const draw8 = ctx => {
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo (320, 20);
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(20, 320);
    ctx.stroke();
    ctx.fillStyle = '#FFFF00';
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo (319, 21);
    ctx.lineWidth = 3;
    ctx.lineCap = "round"; // Sets rounded ends
    ctx.lineTo(21, 319);
    ctx.stroke();
  }

  let draw = null;
  switch (props.winNumber){
      case 1:
          draw = draw1;
          break;
      case 2:
          draw = draw2;
          break;
      case 3:
          draw = draw3;
          break;
      case 4:
          draw = draw4;
          break;
      case 5:
          draw = draw5;
          break;
      case 6:
          draw = draw6;
          break;
      case 7:
          draw = draw7;
          break;
      case 8:
          draw = draw8;
          break;
  }


  useEffect(() => {
    // Draw canvas here...
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context)
   
  }, [draw]);

  

  return <canvas ref={canvasRef} width={props.width} height={props.height} style={props.style}/>;
}