// заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'
const API_URL = 'https://raw.githubusercontent.com/Fredyflugger/fakeAPI/master'

let app = new Vue ({
  el: '#app',
  data: {
    imgCatalog: 'https://placehold.it/200x150',
    cartImg: 'https://placehold.it/60x60',
    products: [],
    cart: [],
    searchText: '',
    searchItem: '',
    searchVis: false,
    cartVision: false,
    cartContains: false,
    catalogUrl: `/catalogData.json`
  },
  computed: {
    searching () {
      if (this.searchText.length === 0) {
        return ''
      } else {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].product_name.toUpperCase().includes(this.searchText.toUpperCase())) {
            return this.products[i].product_name
          }
        }
      }
    }
  },
  methods: {
    getJSON (url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error)
        })
    },
    addProduct (product) {
      let addedItem = false
      if (this.cart.length === 0) {
        this.cart.push(product)
        this.cart[0].quantity = 1
        this.cartVision = true
        this.cartContains = true
      } else {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id_product === product.id_product) {
            this.cart[i].quantity++
            addedItem = true
            break
          }
        }
        if (addedItem === false) {
          this.cart.push(product)
          this.cart[this.cart.length - 1].quantity = 1
        }
      }
      this.$forceUpdate()
    },
    cartClick () {
      this.cartVision = !this.cartVision
    },
    toCart () {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].product_name.toUpperCase().includes(this.searchText.toUpperCase())) {
          this.addProduct(this.products[i])
        }
      }
    },
    searchVision () {
      this.searchVis = true
    },
    searchOff () {
      this.searchVis = false
    },
    removeCartItem () {
    }
  },
  mounted () {
    this.getJSON(`${API_URL + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el)
        }
      })
  }
})

// Глобальные сущности 
// var userCart = [];

// // Hardcore Henry
// class List {
//  constructor (url, container) {
// 		this.container = container
// 		this.goods = []
// 		this._init ()
// 		this.allProducts = []
// 		this.url = url
// 	}

// 	_init () {
		
// 		return false
// 	}
// 	getJSON (url) {
// 		return fetch (url ? url : `${API_URL + this.url}`)
// 			.then (result => result.json ())
// 			.catch (error => {
// 				console.log (error)
// 		})
// 	}

// 	_render () {
// 		const block = document.querySelector (this.container)
// 		for (let product of this.goods) {
// 			const prod = new lists[this.constructor.name] (product)
// 			this.allProducts.push (prod)
// 			block.insertAdjacentHTML ('beforeend', prod.render())
// 		}
// 	}

// 	handleData (data) {
// 		debugger
// 		this.goods = [...data]
// 		this._render ()
// 	}
// }

// class ProductsList extends List {
// 	constructor (cart,url = `${API_URL}/catalogData.json`, container = '.products') {
// 		super (url, container)
// 		this.cart = cart
// 		this.getJSON ()
// 			.then (data => this.handleData (data))
// 	}
// 	_init () {
// 		document.querySelector (this.container).addEventListener ('click', evt => {
// 			if (evt.target.classList.contains ('buy-btn')) {
// 				this.cart.addProduct (evt.target)
// 			}
// 		})
// 	}
// }

// class Cart extends List {
// 	constructor (cart,url = `${API_URL}/addToBasket.json`, container = '.cart-block') {
// 		super (url, container)
// 		this.getJSON ()
// 			.then (data => this.handleData (data.contents))
// 	}
// 	addProduct (element) {
// 		this.getJSON (`${API_URL}/addToBasket.json`)
// 			.then (data => {
// 				if (data.result) {
// 					let productId = +element.dataset['id']
// 					let find = this.allProducts.find (product => product.id_product === productId)
// 					if (find) {
// 						find.quantity++
// 						this._updateCart (find)
// 					} else {
// 						let product = {
// 							id_product: productId,
// 							price: +element.dataset['price'],
// 							product_name: element.dataset['name'],
// 							quantity: 1
// 						}
// 						this.goods = [product]
// 						this.render ()
// 					}
// 				} else {
// 					console.log ('some err')
// 				}
// 			})
// 	}
// 	removeProduct (element) {
// 		this.getJSON (`${API_URL}/deleteFromBasket.json`)
// 			.then (data => {
// 				if (data.result) {
// 					let productId = +element.dataset['id']
// 					let find = this.allProducts.find (product => product.id_product === productId)
// 					if (find > 1) {
// 						find.quantity--
// 						this._updateCart (find)
// 					} else {
// 						this.allProducts.splice (this.allProducts.indexOf (find), 1)
// 						document.querySelector (`.cart-item[data-id = "${productId}"]`).remove ()
// 					}
// 				} else {
// 					console.log ('some err')
// 				}
// 			})
// 	}
// 	_updateCart (product) {
// 		let block = document.querySelector (`.cart-item[data-id = "${product.id_product}"]`)
// 		block.querySelector ('.product-quantity').textContent = `К-во: ${product.quantity}`
// 		block.querySelector ('.product-price').textContent = ` ${product.quantity * product.price}`
// 	}
// 	_init () {
// 		document.querySelector (this.container).addEventListener ('click', evt => {
// 			if (evt.target.classList.contains ('del-btn')) {
// 				this.removeProduct (evt.target)
// 			}
// 		})
// 		document.querySelector ('.btn-cart').addEventListener ('click', () => {
// 			document.querySelector(this.container).classList.toggle ('invisible')
// 		})
// 	}
// }

// class Item {
// 	constructor (el, img = 'https://placehold.it/200x150') {
// 		this.product_name = el.product_name
// 		this.price = el.price
// 		this.id_product = el.id
// 		this.img = img
// 	}
// 	render () {
// 		return `<div class="product-item" data-id="${this.id_product}">
//                         <img src="${this.img}" alt="Some img">
//                         <div class="desc">
//                             <h3>${this.product_name}</h3>
//                             <p>${this.price} $</p>
//                             <button class="buy-btn" 
//                             data-name="${this.product_name}"
//                             data-image="${this.img}"
// 							data-price="${this.price}
// 							data-id="${this.id_product}">Купить</button>
//                         </div>
//                     </div>`
// 	}
// }

// class ProductItem extends Item {
// 	//все записано в родительский класс и более ничего не надо
// }

// class CartItem extends Item {
// 	//+дополнительные корзинные штуки
// 	constructor (el, img = 'https://placehold.it/50x100') {
// 		super (el, img)
// 		this.quantity = el.quantity
// 	}
// 	render () {
// 		return `<div class="cart-item" data-id="${this.id_product}">
// 					<div class="product-bio">
//                         <img src="${this.img}" alt="Some img">
//                         <div class="product-desc">
// 							<p class="product-title">${this.product_name}</p>
// 							<p class="product-quantity">К-во: ${this.quantity}</p>
// 							<p class="product-single-price">$${this.price} each</p>
//                     	</div>
// 					</div>
// 					<div class="right-block">
// 						<p class="product-price">${this.quantity * this.price}</p>
// 						<button class="del-btn" data-id="${this.id_product}">&times;</button>
// 					</div>
// 				</div>`
// 	}
// }
// let lists = {
// 	ProductsList: ProductItem,
// 	Cart: CartItem
// }


// let cart = new Cart ()
// let list = new ProductsList (cart)
