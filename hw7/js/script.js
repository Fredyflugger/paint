const doc = document
const canvas = doc.querySelector('#canv')
const ctx = canvas.getContext('2d')

var system = {
  width: canvas.getAttribute('width'),
  height: canvas.getAttribute('height'),
  currentTool: 'brush',
  currentColor: 'black',
  brushSize: 5
}

function reRenderSys (obj, elem, action) {
  obj[elem] = action
}

function getCoords (evt) {
  let x = evt.offsetX
  let y = evt.offsetY
  doc.querySelector('#xCoord').innerText = x
  doc.querySelector('#yCoord').innerText = y
}

canvas.addEventListener('mousemove', getCoords)

function switchTool (button) {
  return button.id
}

function switchSize (button) {
  return doc.querySelector('#size-select').value
}

function switchColor (button) {
  return doc.querySelector('#color').value
}

function mouseActions (evt) {
  if (evt.target.classList.contains('tool-button')) {
    reRenderSys(system, 'currentTool', switchTool(evt.target))
  } else if (evt.path[1].classList.contains('tool-button')) {
    reRenderSys(system, 'currentTool', evt.path[1].id)
  } else if (evt.target.id === 'size-select') {
    reRenderSys(system, 'brushSize', switchSize(evt.target))
  }
}

var lastX
var lastY

doc.addEventListener('click', mouseActions)
doc.addEventListener('keyup', mouseActions)

doc.querySelector('#color').addEventListener('input', (evt) => {
  reRenderSys(system, 'currentColor', switchColor(evt.target))
})

var mousePressed = false

canvas.addEventListener('mousedown', (evt) => {
  if (system.currentTool === 'brush') {
    mousePressed = true
    draw(false)
  } else if (system.currentTool === 'erase') {
    mousePressed = true
    erase(false)
  } else if (system.currentTool === 'spray') {
    spray()
  }
})

canvas.addEventListener('mousemove', (evt) => {
  if (system.currentTool === 'brush') {
    if (mousePressed) {
      draw(true)
    }
  } else if (system.currentTool === 'erase') {
    if (mousePressed) {
      erase(true)
    }
  }
})

canvas.addEventListener('mouseup', (evt) => {
  mousePressed = false
})

canvas.addEventListener('mouseleave', (evt) => {
  mousePressed = false
})

function draw (isDown) {
  if (isDown) {
    ctx.beginPath()
    ctx.globalAlpha = 1
    ctx.strokeStyle = system.currentColor
    ctx.lineWidth = system.brushSize
    ctx.shadowBlur = 2
    ctx.shadowColor = system.currentColor
    ctx.lineJoin = 'round'
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(doc.querySelector('#xCoord').innerText, doc.querySelector('#yCoord').innerText)
    ctx.closePath()
    ctx.stroke()
  }
  lastX = doc.querySelector('#xCoord').innerText
  lastY = doc.querySelector('#yCoord').innerText
}

function erase (isDown) {
  if (isDown) {
    ctx.beginPath()
    ctx.shadowBlur = 0
    ctx.shadowColor = '#fff'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = system.brushSize
    ctx.lineJoin = 'round'
    ctx.globalAlpha = 1
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(doc.querySelector('#xCoord').innerText, doc.querySelector('#yCoord').innerText)
    ctx.closePath()
    ctx.stroke()
  }
  lastX = doc.querySelector('#xCoord').innerText
  lastY = doc.querySelector('#yCoord').innerText
}

var clearAll = () => {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

doc.querySelector('#save').addEventListener('click', (evt) => {
  evt.path[2].setAttribute('download', 'Canvas.png')
  evt.path[2].setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
})
