let ctx
let x=100
let y=200
let dx=5
let dy=5

function initGame(){
    ctx = canva.getContext('2d')
    setInterval(moveBall,10)
}
function moveBall(){
    ctx.clearRect(0,0, 1000,500)
    ctx.beginPath()
    ctx.fillStyle="#0000ff"
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    ctx.arc(x,y,20,0,Math.PI*2,true) 
    ctx.closePath()
    ctx.fill()
    //odbijanie od scian
    if( x<0 || x>1000) dx=-dx
    if( y<0 || y>500) dy=-dy
    x+=dx
    y+=dy
}