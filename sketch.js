var hr, min, sec, hrAng, minAng, secAng
function setup() {
  createCanvas(1366,657);
  angleMode(DEGREES)
}

function draw() {
  background("Black");  
  translate(660,300)
  rotate(-90)
  hr = hour()
  min = minute()
  sec = second()
  secAng = map(sec,0,60,0,360)
  minAng = map(min,0,60,0,360)
  hrAng = map(hr%12,0,12,0,360)
  push()
  rotate(secAng)
  stroke("Red")
  strokeWeight(6)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAng)
  stroke("Green")
  strokeWeight(6)
  line(0,0,75,0)
  pop()
  push()
  rotate(hrAng)
  stroke("Blue")
  strokeWeight(6)
  line(0,0,50,0)
  pop()
  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke("Red")
  arc(0,0,300,300,0,secAng)
  stroke("green")
  arc(0,0,280,280,0,minAng)
  stroke("Blue")
  arc(0,0,260,260,0,hrAng)
  drawSprites();

}