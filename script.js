let ctx
let canvaWidth = window.innerWidth
let canvaHeight = window.innerHeight
let x=Math.floor(Math.random() * canvaWidth-20)
let y=Math.floor(Math.random() * canvaHeight-20)
let xHole = 150
let yHole = 300
function initGame(){
    ctx = canva.getContext('2d')
    ctx.canvas.width = canvaWidth
    ctx.canvas.height = canvaHeight
    setInterval(moveBall,10)
    
}
function addHoles(){
    ctx.beginPath()
    ctx.fillStyle="#FFF"
    ctx.arc(xHole,yHole,30,0,Math.PI*2,true)
    ctx.closePath()
    ctx.fill()
        //odbijanie od scian
    if( xHole<0 || xHole>canvaWidth) dx=-dx
    if( y<0 || y>canvaHeight) dy=-dy
    xHole+=dx
    yHole+=dy
}
function moveBall(){
    ctx.clearRect(0,0, canvaWidth,canvaHeight)
    ctx.beginPath()
    ctx.fillStyle="#0000ff"
    // Draws a circle of radius 20 at the coordinates x,y on the canvas
    ctx.arc(x,y,20,0,Math.PI*2,true) 
    ctx.closePath()
    ctx.fill()
    addHoles()

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