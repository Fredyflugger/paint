let catalog = {
  catName: ['Potato', 'Tomato', 'Carrot', 'Watermelon'],
  catPrice: ['123', '321', '222', '233'],
  catQuant: [3, 4, 1, 3],
  description: [
    `I'm Commander Shepard and this is my favorite Potato on the Citadel.`,
    `I'm Commander Shepard and this is my favorite Tomato on the Citadel.`,
    `I'm Commander Shepard and this is my favorite Carrot on the Citadel.`,
    `I'm Commander Shepard and this is my favorite Watermelon on the Citadel.`],
  outputCatalog: () => {
    for (let i = 0; i < catalog.catName.length; i++) {
      let catItem = document.createElement('div')
      catItem.classList.add(`catItem${[i]}`)
      catItem.classList.add(`catItem`)
      document.querySelector('.catalog').appendChild(catItem)
      let name = document.createElement('h2')
      name.innerText = `${catalog.catName[i]}`
      document.querySelector(`.catItem${[i]}`).appendChild(name)
      let price = document.createElement('h4')
      price.innerText = `${catalog.catPrice[i]} rub`
      document.querySelector(`.catItem${[i]}`).appendChild(price)
      let quant = document.createElement('span')
      quant.innerText = `${catalog.catQuant[i]} items available`
      document.querySelector(`.catItem${[i]}`).appendChild(quant)
      let desc = document.createElement('p')
      desc.innerText = `${catalog.description[i]}`
      document.querySelector(`.catItem${[i]}`).appendChild(desc)
    }
  }
}

let cart = {
  emptyCart: () => {
    let cart = document.createElement('div')
    cart.classList.add('cartHeader')
    cart.innerText = 'The cart is currently empty'
    document.querySelector('.cart').appendChild(cart)
  },
  cartName: [],
  cartPrice: [],
  cartQuantity: [],
  fillingCart: () => {
    cart.cartName = catalog.catName
    cart.cartPrice = catalog.catPrice
    cart.cartQuantity = catalog.catQuant
  },
  getInTheCartQuick: () => {
    cart.fillingCart()
    let itemQuant = 0
    let totalPrice = 0
    for (let i = 0; i < cart.cartName.length; i++) {
      itemQuant += +cart.cartQuantity[i]
      let Price = +cart.cartPrice[i] * +cart.cartQuantity[i]
      totalPrice += Price
    }
    document.querySelector('.cartHeader').innerText = `В корзине: ${itemQuant} твоаров на ${totalPrice} рублей`
    for (let i = 0; i < cart.cartName.length; i++) {
      let cartItem = document.createElement('div')
      cartItem.classList.add(`cartItem${[i]}`)
      cartItem.classList.add(`cartItem`)
      document.querySelector('.cart').appendChild(cartItem)
      let name = document.createElement('h2')
      name.innerText = `${cart.cartName[i]}`
      document.querySelector(`.cartItem${[i]}`).appendChild(name)
      let price = document.createElement('h4')
      price.innerText = `${+cart.cartPrice[i] * +cart.cartQuantity[i]} rub (${+cart.cartPrice[i]} per)`
      document.querySelector(`.cartItem${[i]}`).appendChild(price)
      let quant = document.createElement('span')
      quant.innerText = `${cart.cartQuantity[i]} items in the cart`
      document.querySelector(`.cartItem${[i]}`).appendChild(quant)
    }
  }
}

cart.emptyCart()
catalog.outputCatalog()
cart.getInTheCartQuick()
