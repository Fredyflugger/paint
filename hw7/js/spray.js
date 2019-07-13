let clientX
let clientY
let timeout
let density = 50

function getRandomFloat (min, max) {
  return Math.random() * (max - min) + min
}

const spray = () => {
  ctx.lineJoin = ctx.lineCap = 'round'
  ctx.fillStyle = system.currentColor
  ctx.shadowBlur = 2
  ctx.shadowColor = system.currentColor
  clientX = +doc.querySelector('#xCoord').innerText
  clientY = +doc.querySelector('#yCoord').innerText
  timeout = setTimeout(function draw () {
    for (var i = density; i--;) {
      var angle = getRandomFloat(0, Math.PI * 2)
      var radius = getRandomFloat(0, 20)
      ctx.fillRect(
        clientX + radius * Math.cos(angle),
        clientY + radius * Math.sin(angle),
        1, 1)
    }
    if (!timeout) return
    timeout = setTimeout(draw, 50)
  }, 50)
}
canvas.onmousemove = function (e) {
  clientX = +doc.querySelector('#xCoord').innerText
  clientY = +doc.querySelector('#yCoord').innerText
}
canvas.onmouseup = function () {
  clearTimeout(timeout)
}