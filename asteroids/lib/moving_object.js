const MovingObject = function (...options){
  this.pos = options[0] || [30,30];
  this.vel = options[1] || [10,10];
  this.radius = options[2] || 5;
  this.color = options[3] || "#00FF00";
};

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 700;
  canvasEl.height = 700;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);

  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();
});

// const ctx = canvasEl.getContext("2d");
MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0],this.pos[1],this.radius,0,(2 * Math.PI),false);
  ctx.fill();
};

MovingObject.prototype.move = function(diffx, diffy) {
   this.pos[0] += diffx;
   this.pos[1] += diffy;
   this.draw(document.getElementById("game-canvas").getContext("2d"));
};

module.exports = MovingObject;