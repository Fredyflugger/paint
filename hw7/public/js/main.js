let app = new Vue({
  el: '#app',
  methods: {
    getJSON (url) {
      return fetch(url)
        .then(res => res.json())
        .catch(err => {
          this.$refs.err.setError(err)
          console.log(err)
        })
    },
    postJSON (url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(err => {
          this.$refs.err.setError(err)
          console.log(err)
        })
    },
    putJSON (url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(err => {
          this.$refs.err.setError(err)
          console.log(err)
        })
    }
  },
  components: {
    products,
    cart,
    filtered,
    error
  }
})
