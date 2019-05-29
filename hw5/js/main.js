const clickeroo = () => {
  let doc = document.getElementById('translateButton')
  if (doc.innerText === 'Привет') {
    doc.innerText = 'Hello'
  } else {
    doc.innerText = 'Привет'
  }
}

const magic = () => {
  let h3 = document.createElement('h3')
  let b = document.getElementById('bold')
  h3.innerText = b.innerText
  b.parentNode.replaceChild(h3, b)
}
