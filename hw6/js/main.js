const API_URL = 'https://raw.githubusercontent.com/Fredyflugger/fakeAPI/master'

let app = new Vue({
  el: '#app',
  methods: {
    getJSON (url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    products,
    cart,
    filtered
  }
})
