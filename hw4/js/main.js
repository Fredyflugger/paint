var game = {
  cOne: document.getElementById('choiceOne'),
  cTwo: document.getElementById('choiceTwo'),
  qLog: document.getElementById('qLog'),
  start: () => {
    game.qLog.readOnly = true
    game.qLog.value = works[0].text
  },
  choiceOne: () => {
    var n = game.cOne.getAttribute('data-stage')
    game.cTwo.style.display = 'initial'
    game.qLog.value = works[works[n].jump[1]].text
    game.cOne.value = works[works[n].jump[1]].answer[1].substr(4)
    game.cTwo.value = works[works[n].jump[1]].answer[2].substr(4)
    game.cOne.setAttribute('data-stage', works[n].jump[1])
    game.cTwo.setAttribute('data-stage', works[n].jump[1])
    if (game.cOne.value === '') {
      game.cOne.value = 'По новой!'
      game.cTwo.style.display = 'none'
    }
  },
  choiceTwo: () => {
    var n = game.cTwo.getAttribute('data-stage')
    game.cTwo.style.display = 'initial'
    game.qLog.value = works[works[n].jump[2]].text
    game.cOne.value = works[works[n].jump[2]].answer[1].substr(4)
    game.cTwo.value = works[works[n].jump[2]].answer[2].substr(4)
    game.cOne.setAttribute('data-stage', works[n].jump[2])
    game.cTwo.setAttribute('data-stage', works[n].jump[2])
    if (game.cOne.value === '') {
      game.cOne.value = 'По новой!'
      game.cTwo.style.display = 'none'
    }
  }
}

game.start()
