const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

function Confetti(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = "hsla(" + Math.floor(Math.random() * 360) + ", 100%, 50%, 1)";
}

Confetti.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Confetti.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += 0.2;
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() > 0.97) {
    confettiPieces.push(new Confetti(
      canvas.width / 2,
      canvas.height,
      Math.random() * 4 - 2,
      -Math.random() * 10 - 10
    ));
  }

  for (let i = 0; i < confettiPieces.length; i++) {
    confettiPieces[i].draw();
    confettiPieces[i].update();

    if (confettiPieces[i].y > canvas.height) {
      confettiPieces.splice(i, 1);
      i--;
    }
  }
}

animate();

setTimeout(() => {
  let stopAnimation = false;
  setTimeout(() => {
    stopAnimation = true;
  }, 5000);
  
  function endAnimation() {
    if (stopAnimation) {
      return;
    }
    
    requestAnimationFrame(endAnimation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < confettiPieces.length; i++) {
      confettiPieces[i].draw();
      confettiPieces[i].update();
    }
  }
  
  endAnimation();
}, 1000);
