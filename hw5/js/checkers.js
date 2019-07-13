let grid = document.createElement('div')
grid.classList.add('grid')
document.querySelector('.container').appendChild(grid)
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = ' 12345678 '
let a = 0
let aBottom = 0
let n = 0
let nRight = 0
let frag = document.createDocumentFragment()
for (let i = 0; i < 100; i++) {
  let div = document.createElement('div')
  if ((i > 9) && (i < 90) && (i % 10 !== 0) && (i % 10 !== 9)) {
    if (parseInt((i / 10) + i) % 2 === 0) {
      div.classList.add('black')
    } else {
      div.classList.add('white')
    }
  } else if ((i < 9) && (i > 0)) {
    div.classList.add('centered')
    div.innerText = alphabet[a]
    a++
  } else if ((i < 99) && (i > 90)) {
    div.classList.add('centered')
    div.innerText = alphabet[aBottom]
    aBottom++
  } else if (i % 10 === 0) {
    div.classList.add('centered')
    div.innerText = numbers[n]
    n++
  } else if (i % 10 === 9) {
    div.classList.add('centered')
    div.innerText = numbers[nRight]
    nRight++
  }
  frag.appendChild(div)
}

document.querySelector('.grid').appendChild(frag)
