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
      let productId = +product.id_product
      let find = false
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id_product === product.id_product) {
          let newItem = this.cart[i]
          newItem.quantity = newItem.quantity + 1
          this.cart[i] = newItem
          find = true
          break
        }
      }
      if (!find) {
        let element = {
          product_name: product.product_name,
          id_product: productId,
          price: +product.price,
          quantity: 1
        }
        this.cart.push(element)
      }
    },
    removeProduct (element) {
      for (let i = 0; i < this.cart.length; i++) {
        if ((this.cart[i].id_product === element.id_product) && (element.quantity > 1)) {
          let newItem = this.cart[i]
          newItem.quantity = newItem.quantity - 1
          this.cart[i] = newItem
          break
        } else if ((this.cart[i].id_product === element.id_product) && (element.quantity === 1)) {
          this.cart.splice(i, 1)
          break
        }
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
  }
}
