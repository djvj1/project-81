canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "red"; // select th ecolor to paint
ctx.lineWidth = 1; // select the width of the brush;
ctx.rect(150, 143, 430, 200); // give instruction to draw a rectangle rect (x,y, width, height)
ctx.stroke();// draw on the canvas 




ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "blue"; // select th ecolor to paint
ctx.lineWidth = 5; // select the width of the brush;
ctx.arc(220, 200, 40, 0, 2 * Math.PI); // give instruction to draw a circle arc (x,y,radius, start angle, end angle)
ctx.stroke();// draw on the canvas 



ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "green"; // select th ecolor to paint
ctx.lineWidth = 5; // select the width of the brush;
ctx.arc(320, 200, 40, 0, 2 * Math.PI); // give instruction to draw a circle arc (x,y,radius, start angle, end angle)
ctx.stroke();// draw on the canvas 


ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "orange"; // select th ecolor to paint
ctx.lineWidth = 5; // select the width of the brush;
ctx.arc(420, 200, 40, 0, 2 * Math.PI); // give instruction to draw a circle arc (x,y,radius, start angle, end angle)
ctx.stroke();// draw on the canvas 

ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "pink"; // select th ecolor to paint
ctx.lineWidth = 5; // select the width of the brush;
ctx.arc(270, 240, 40, 0, 2 * Math.PI); // give instruction to draw a circle arc (x,y,radius, start angle, end angle)
ctx.stroke();// draw on the canvas 

ctx.beginPath(); // move to canvas to draw and take the brush
ctx.strokestyle = "purple"; // select th ecolor to paint
ctx.lineWidth = 5; // select the width of the brush;
ctx.arc(370, 240, 40, 0, 2 * Math.PI); // give instruction to draw a circle arc (x,y,radius, start angle, end angle)
ctx.stroke();// draw on the canvas 


function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}