const calcVar = function () {
  var a = parseInt(document.getElementById('calcA').value)
  var b = parseInt(document.getElementById('calcB').value)
  var c = [a, b]
  return c
}
const adding = function () {
  var arr = calcVar()
  var a = arr[0]
  var b = arr[1]
  document.getElementById('result').value = a + b
}

const subtracting = function (a, b) {
  var arr = calcVar()
  a = arr[0]
  b = arr[1]
  document.getElementById('result').value = a - b
}

const multiplication = function (a, b) {
  var arr = calcVar()
  a = arr[0]
  b = arr[1]
  document.getElementById('result').value = a * b
}

const division = function (a, b) {
  var arr = calcVar()
  a = arr[0]
  b = arr[1]
  if (b === 0) {
    document.getElementById('result').value = 'ERR'
  } else {
    document.getElementById('result').value = a / b
  }
}

var x = 12
var y = -20
console.log(`x = ${x} and y = ${y}`)

// x = parseInt(prompt('Enter x'));
// y = parseInt(prompt('Enter y'));

const add = function (a, b) {
  var c = a + b
  return c
}

const sub = function (a, b) {
  var c = a - b
  return c
}

const multi = function (a, b) {
  var c = a * b
  return c
}

const div = function (a, b) {
  if (b === 0) {
    var c = 'ERR'
  } else {
    c = a / b
  }
  return c
}

console.log(`x + y = ${add(x, y)}; x - y = ${sub(x, y)}; x * y = ${multi(x, y)}; x / y = ${div(x, y)};`)
