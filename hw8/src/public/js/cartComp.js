let cartItem = {
  props: ['cartItem', 'img'],
  template: `
            <div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="someImage">
                    <div class="product-desc">
                        <p class="product-title"> {{ cartItem.product_name }} </p>
                        <p class="product-quantity">Quantity: {{ cartItem.quantity }} </p>
                        <p class="product-single-price">$ {{ cartItem.price }} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price"> {{ cartItem.quantity * cartItem.price }}</p>
                    <button class="del-btn" @click="$parent.removeProduct (cartItem)">&times;</button>
                </div>
            </div>
    `
}

let cart = {
  data () {
    return {
      imgCatalog: 'https://placehold.it/50x50',
      cart: []
    }
  },
  methods: {
    addProduct (product) {
      let find = this.cart.find(el => el.id_product === product.id_product)
      if (find) {
        this.$parent.putJSON(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then(data => {
            if (data.result) {
              find.quantity++
            }
          })
      } else {
        let prod = Object.assign({ quantity: 1 }, product)
        this.$parent.postJSON('/api/cart', prod)
          .then(data => {
            this.cart.push(prod)
          })
      }
    },
    removeProduct (element) {
      let find = this.cart.find(el => el.id_product === element.id_product)
      if (find.quantity > 1) {
        this.$parent.putJSON(`/api/cart/${find.id_product}`, { quantity: -1 })
          .then(data => {
            if (data.result) {
              find.quantity--
            }
          })
      } else {
        this.$parent.putJSON(`/api/cart/${find.id_product}`, { quantity: -1 })
          .then(data => {
            if (data.result) {
              this.cart.splice(this.cart.indexOf(element), 1)
            }
          })
      }
    }
  },
  template: `
              <div class="cart-block invisible">
                  <cartItem
                  v-for="cartItem of cart"
                  :key="cartItem.id_product"
                  :img="imgCatalog"
                  :cartItem="cartItem"
                  ></cartitem>
              </div>`,
  components: {
    cartItem
  },
  mounted () {
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector('.cart-block').classList.toggle('invisible')
    })
    this.$parent.getJSON('/api/cart')
      .then(data => {
        for (let el of data.contents) {
          this.cart.push(el)
        }
      })
  }
}

export default cart
