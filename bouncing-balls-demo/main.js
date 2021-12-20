const canvas = document.querySelector('canvas')
// represents drawing area for the canvas
const context = canvas.getContext('2d')
// height and width to equal height and width of browser viewport
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

function randomNum(min, max){
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

function Ball(x, y, velX, velY, colour, size){
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.colour = colour
  this.size = size
}

Ball.prototype.draw = function(){
  // call to start drawing a shape
  context.beginPath()
  // set colour
  context.fillStyle = this.colour;
  // x & y props centre of the ball, size = radius, 0 = start number of degrees, 2 * PI = end number of degrees = 360
  context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  // end
  context.fill()
}

// Updating values

Ball.prototype.update = function() {
  // check if ball is going off right edge larger than width of canvas
  if((this.x + this.size) >= width){
    this.velX = -(this.velX)
  }
  // check if ball is going off the left edge
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX)
  }
  // check if ball is going off bottom edge greater than canvas height
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY)
  }
  // check if ball is going off top edge
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY)
  }

  this.x += this.velX
  this.y += this.velY
}