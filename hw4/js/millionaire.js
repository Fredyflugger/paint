var game = {
  game: (arr) => {
    let play = true
    let round = 0
    var score = 0
    while (play) {
      if (round < game.QUESTIONS.length) {
        let question = game.generateQuestion(arr, round)
        let answer = +prompt(`${question.qT}
        \n ${question.qA} 
        \n Вы заработаете: ${game.score(round + 1)} этим вопросом`)
        play = game.check(answer, round)
        round++
      } else {
        play = false
      }
    }
    alert(`Your final score is: ${game.score(round - 1)}`)
  },
  score: (rnd) => {
    var score
    switch (rnd) {
      case 0:
        score = '0'
        break
      case 1:
        score = '1,000'
        break
      case 2:
        score = '2,500'
        break
      case 3:
        score = '5,000'
        break
      case 4:
        score = '10,000'
        break
      case 5:
        score = '25,000'
        break
      case 6:
        score = '50,000'
        break
      case 7:
        score = '100,000'
        break
      case 8:
        score = '250,000'
        break
      case 9:
        score = '500,000'
        break
      case 10:
        score = '1,000,000'
        break
      default:
        break
    }
    return score
  },
  check: (ans, rnd) => {
    if (ans === game.QUESTIONS[rnd].correct) {
      alert('Correct')
      return true
    } else {
      alert('Not Correct')
      return false
    }
  },
  generateQuestion: (arr, rnd) => {
    let answers = ''
    for (let i = 0; i < 4; i++) {
      answers += `${i + 1} - ${arr[rnd].answers[i]} \n`
    }
    let text = arr[rnd].text
    let correct = arr[rnd].correct - 1
    return {
      qT: text,
      qC: correct,
      qA: answers
    }
  },
  QUESTIONS: [
    {
      text: 'Какой язык программирования лучший на свете?',
      answers: ['JS', 'Perl', 'Ruby', 'C#'],
      correct: 1
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    },
    {
      text: 'Без чего нельзя выжить в JS?',
      answers: ['Головы', 'Объектов', 'Проблем', 'Костылей'],
      correct: 4
    }
  ]
}

game.game(game.QUESTIONS)
