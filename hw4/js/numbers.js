const numbers = () => {
  var digits = {}
  var temp
  var n = parseInt(document.getElementById('number').value)
  var count = 0
  if (n >= 1) ++count
  while (n / 10 >= 1) {
    n /= 10
    ++count
  }
  n = parseInt(document.getElementById('number').value)
  if (count > 3) {
    console.log('Only below 999')
  } else {
    for (var i = 0; i < count; i++) {
      temp = ((n / 10 % 1).toFixed(1)) * 10
      if (i === 0) digits.ones = temp
      if (i === 1) digits.tenth = temp
      if (i === 2) digits.hundredth = temp
      n = n / 10 | 0
    }
  }
  console.log(digits)
  return digits
}
