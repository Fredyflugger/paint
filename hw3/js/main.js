const primeFinder = (a) => {
  var i = 2
  var arr = []
  while (i < a) {
    var j = 2
    var c = true
    while (j < i) {
      var b = i % j
      if (b === 0) {
        c = false
        break
      }
      j++
    }
    if (c) {
      arr.push(i)
    }
    i++
  }
  document.getElementById('simp').value = arr
  return arr
}

console.log(primeFinder(100))

document.getElementById('value').readOnly = true

var listing = [['item1', '2399'], ['item2', '499'], ['item3', '659'], ['item4', '1500']]

document.getElementById('item1').value = listing[0][0]
document.getElementById('price1').value = listing[0][1]
document.getElementById('item2').value = listing[1][0]
document.getElementById('price2').value = listing[1][1]
document.getElementById('item3').value = listing[2][0]
document.getElementById('price3').value = listing[2][1]
document.getElementById('item4').value = listing[3][0]
document.getElementById('price4').value = listing[3][1]

const countBasketPrice = (arr) => {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i][1])
  }
  document.getElementById('value').value = sum
  return sum
}

const BasketPriceOf = (arr) => {
  var price = 0
  for (var value of arr) {
    price += parseInt(value[1])
  }
  return price
}

const BasketPriceEach = (arr) => {
  var price = 0
  arr.forEach(function (item) {
    price += parseInt(item[1])
  })
  return price
}

console.log('Сумма подсчитана с помощью for: ' + countBasketPrice(listing))
console.log('Сумма подсчитана с помощью for...of: ' + BasketPriceOf(listing))
console.log('Сумма подсчитана с помощью for...each: ' + BasketPriceEach(listing))

for (var i = 0; i < 10; console.log(i++)) {}

for (i = 0; i < 20; i++) {
  var xxx = ['x']
  for (var j = 0; j < i; j++) {
    xxx.push('x')
  }
  console.log(xxx)
}
