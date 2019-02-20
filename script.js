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
    // Draws a circle of radius 20 at the coordinates x,y on the canvas
    ctx.arc(x,y,20,0,Math.PI*2,true) 
    ctx.closePath()
    ctx.fill()
    //odbijanie od scian
    // if( x<0 || x>1000) dx=-dx
    // if( y<0 || y>500) dy=-dy
    // x+=dx
    // y+=dy
    if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(ev) {
        let h = document.documentElement.clientHeight
        let w = document.documentElement.clientWidth
        let acc = ev.accelerationIncludingGravity
        X=acc.x
        Y=acc.y
        X=0-X
        X=X+10
        Y=Y+10
        X*=50
        Y*=50
        X=(X*w)/1000
        Y=(Y*h)/1000
        let hY = Y
        let hX = X
        x = hX
        y= hY
    }, false)
}
}