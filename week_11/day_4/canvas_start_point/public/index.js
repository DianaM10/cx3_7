var app = function(){
  var canvas = document.getElementById('main-canvas');
  console.log('canvas', canvas);
  var context = canvas.getContext('2d');
  console.log(context);
//x coord where it starts, y coord where is starts in y and height and width
  context.fillStyle ="orange";
  context.fillRect(10,10,50,50);

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 200);
  context.stroke();

  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(200, 300);
  context.lineTo(100, 300);
  context.closePath();
  context.fillStyle ='dodgerblue'; //strokestyle for unfilled
  context.fill(); //stroke for unfilled

  context.beginPath();
  //(x,y,radius, start angle, end angle, cm/ccw)
  context.arc(75, 75, 50, 0, Math.PI*2, true); //this bit for circle
  context.moveTo(110, 75);
  context.arc(75,75,35,0,Math.PI,false)
  context.moveTo(65,65);
  context.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  context.moveTo(95,65);
  context.arc(90,65,5,0,Math.PI*2,true);
  context.stroke();

  var drawCircle = function(x,y) {
    context.beginPath();
    context.arc(x,y,50,0,Math.PI*2,true);
    context.stroke();
  }
    //onclick/onmousemove
  canvas.onclick = function(event) {
    drawCircle(event.layerX, event.layerY);
    // console.log('clicked', event);
    // console.log('location', event.layerX, event.layerY); 
  }

  var img = document.createElement('img');
  img.src = "http://www.codebearsoftware.com/BearCoding.jpg";

  var drawBear = function() {
    context.drawImage(img, 300, 300, 100, 100);
  }

img.onload = drawBear;

  var changeColor = function() {
    // console.log(this.value);
    context.strokeStyle = this.value;
  }

  var colorPicker =document.querySelector('#input-colour');
  colorPicker.onchange = changeColor;

}

window.onload = app;


