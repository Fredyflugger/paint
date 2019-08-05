let add = (cart, req) => {
  cart.contents.push(req.body)
  return JSON.stringify(cart, null, 4)
}

let change = (cart, req) => {
  console.log(req)
  console.log(req.params.id)
  let find = cart.contents.find(el => el.id_product === +req.params.id)
  find.quantity++
  return JSON.stringify(cart, null, 4)
}

let del = (cart, req) => {
  console.log(cart)
  let find = cart.contents.find(el => el.id_product === +req.params.id)
  if (find.quantity > 1) {
    find.quantity--
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1)
  }
  return JSON.stringify(cart, null, 4)
}

module.exports = {
  add, change, del
}
