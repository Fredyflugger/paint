// ФЭЙК ЭПИ

const API_URL = 'https://raw.githubusercontent.com/Fredyflugger/fakeAPI/master'

const image = 'https://placehold.it/200x150'

let xhr

if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  xhr = new ActiveXObject('Microsoft.XMLHTTP')
}

function makeGETRequest (url) {
  return new Promise((resolve, reject) => {
    xhr.open('GET', url, true)
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        var error = new Error(this.statusText)
        error.code = this.status
        reject(error)
      }
    }
    xhr.onerror = function () {
      reject(new Error('Network Error'))
    }
    xhr.send()
  })
}

class GoodsList {
  constructor () {
    this.goods = []
  }

  fetchGoods () {
    makeGETRequest(`${API_URL}/catalogData.json`).then(
      response => {
        console.log(`Fulfilled`)
        this.goods = JSON.parse(response)
        this._render()
      },
      error => console.log(`Rejected: ${error}`)
    )
  }
  _render () {
    const block = document.querySelector('.products')
    this.goods.forEach(product => {
      const prod = new Product(product)
      block.insertAdjacentHTML('beforeend', prod.render())
    })
  }
}

const list = new GoodsList()
list.fetchGoods()

class Product {
  constructor (product) {
    this.id = product.id_product
    this.title = product.product_name
    this.price = product.price
    this.img = image
  }
  render () {
    return `<div class="product-item">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-name="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
  }
}
