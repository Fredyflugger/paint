let carousel = {
  mainPic: document.querySelector('#main').children[1],
  roulette: document.querySelector('#thumbNails'),
  next: document.querySelector('#next'),
  prev: document.querySelector('#prev'),
  activeImage: document.querySelector('#thumbNails').children[0],
  active: (img) => {
    for (let i = 0; i < 10; i++) {
      document.getElementById(i).classList.remove('active')
    }
    img.classList.add('active')
    carousel.activeImage = img
  },
  getImg: () => {
    for (let i = 0; i < 10; i++) {
      let tNail = document.createElement('img')
      tNail.src = `gallery/${i}.png`
      tNail.alt = `image ${i}`
      tNail.id = `${i}`
      document.querySelector('#thumbNails').appendChild(tNail)
    }
  }
}

carousel.activeImage = document.querySelector('#thumbNails').children[0]

carousel.roulette.addEventListener('click', (evt) => {
  if (evt.target.src) {
    carousel.mainPic.src = evt.target.src
    carousel.activeImage = evt.target
    carousel.active(carousel.activeImage)
  }
})

carousel.next.addEventListener('click', (evt) => {
  let n = document.getElementById('thumbNails').childElementCount - 1
  let i = 0
  while (i < (n + 1)) {
    if ((carousel.activeImage.id === `${i}`) && (carousel.activeImage.id !== `${n}`)) {
      carousel.mainPic.src = document.getElementById(`${i + 1}`).src
      carousel.activeImage = document.getElementById(`${i + 1}`)
      carousel.active(document.getElementById(`${i + 1}`))
      i = 0
      break
    } else if (carousel.activeImage.id === `${n}`) {
      carousel.mainPic.src = document.getElementById(`0`).src
      carousel.activeImage = document.getElementById(`0`)
      carousel.active(document.getElementById(`0`))
      i = 0
      break
    }
    i++
  }
})

carousel.prev.addEventListener('click', (evt) => {
  let i = document.getElementById('thumbNails').childElementCount - 1
  while (i > 0) {
    if ((carousel.activeImage.id === `${i}`) && (carousel.activeImage.id !== `0`)) {
      carousel.mainPic.src = document.getElementById(`${i - 1}`).src
      carousel.activeImage = document.getElementById(`${i - 1}`)
      carousel.active(document.getElementById(`${i - 1}`))
      i = 10
      break
    } else if (carousel.activeImage.id === '0') {
      carousel.mainPic.src = document.getElementById(`9`).src
      carousel.activeImage = document.getElementById(`9`)
      carousel.active(document.getElementById(`9`))
      i = 10
      break
    }
    i--
  }
})

carousel.getImg()

carousel.active(document.getElementById(0))
