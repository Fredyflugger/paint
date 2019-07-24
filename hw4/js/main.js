let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`

text = text.replace(/\B'/g, '"')
console.log(text)

class Formcheck {
  constructor () {
    this.name = ''
    this.phone = ''
    this.mail = ''
    this.text = ''
  }
  getData () {
    this.name = document.getElementById('name').value
    this.phone = document.getElementById('phone').value
    this.mail = document.getElementById('mail').value
    this.text = document.getElementById('text').value
  }
  regCheck () {
    const nameReg = /[a-zа-яё]+/i
    const phoneReg = /\+7\(\d{3}\)\d{3}-\d{4}/
    const mailReg = /[a-z0-9.-]+@[a-z]+\.[a-z]+/i
    const textReg = /.+/ig
    if (nameReg.test(this.name)) {
      console.log('Name is correct')
    } else {
      console.log('Name is incorrect')
      document.getElementById('name').classList.toggle('borderError')
    }
    if (phoneReg.test(this.phone)) {
      console.log('Phone is correct')
    } else {
      console.log('Phone is incorrect')
      document.getElementById('phone').classList.toggle('borderError')
    }
    if (mailReg.test(this.mail)) {
      console.log('E-mail is correct')
    } else {
      console.log('E-mail is incorrect')
      document.getElementById('mail').classList.toggle('borderError')
    }
    if (textReg.test(this.text)) {
      console.log('Text is correct')
    } else {
      console.log('Please type anything in the text form')
      document.getElementById('text').classList.toggle('borderError')
    }
  }
}

let test = new Formcheck()

document.getElementById('send').addEventListener('mousedown', function () {
  test.getData()
})
document.getElementById('send').addEventListener('mouseup', function () {
  test.regCheck()
})
