
let target = document.getElementById('rps-state')

let player2Choice = 'random';
let player1Choice = 'random';


let buttons = {
  player1: {
    random: document.getElementById('player1random'),
    rock: document.getElementById('player1rock'),
    paper: document.getElementById('player1paper'),
    scissors: document.getElementById('player1scissors')
  },
  player2: {
    random: document.getElementById('player2random'),
    rock: document.getElementById('player2rock'),
    paper: document.getElementById('player2paper'),
    scissors: document.getElementById('player2scissors')
  }
}

/** plays a game of rock paper sicors.
 * @param {string} choice1 - the first player's choice.
 * @param {string} choice2 - the second player's choice.
 * @returns {string} - what state the first player is in, winning, lost, or draw.
 */
function rpsLogic(choice1, choice2) {
  if (choice1 == 'random') choice1 = randomPlay();
  if (choice2 == 'random') choice2 = randomPlay();
  switch (choice1) {
    case 'rock':
      switch (choice2) {
        case 'scissors':
          return "winner";
        case 'paper':
          return "loser";
        case 'rock':
          return 'draw';
      }
      break;
    case 'paper':
      switch (choice2) {
        case 'scissors':
          return "loser";
        case 'paper':
          return 'draw';
        case 'rock':
          return "winner";
      }
      break;
    case 'scissors':
      switch (choice2) {
        case 'scissors':
          return 'draw';
        case 'paper':
          return "winner";
        case 'rock':
          return "loser";
      }
      break;
    default:
      return 'invalid';
  }
}

function randomPlay() {
  let onetothree = Math.floor(Math.random() * 3)
  return onetothree == 0 ? 'rock' : onetothree == 1 ? 'paper' : 'scissors'
}

/**
 * @param {string} choice1 the first player's choice.
 * @param {string} [choice2] the second player's choice.
 */
function play(choice1, choice2) {
  let result = rpsLogic(choice1, choice2)
  // alert(result)
  drawState(result)
  console.log(`player 1 is the ${result}`)
  return result
}

let states = {
  'winner': '<i class="fas fa-trophy fa-10x"></i>',
  'loser': '<i class="fas fa-ban fa-10x"></i>',
  'draw': '<i class="fas fa-balance-scale fa-10x"></i>'
}

function drawState(state) {

  target.innerHTML = states[state]

}

function drawShadows() {
  Object.values(buttons.player1).forEach(element => {
    element.classList.remove('glow')
  });
  Object.values(buttons.player2).forEach(element => {
    element.classList.remove('glow')
  });
  switch (player1Choice) {
    case 'random':
      buttons.player1.random.classList.add('glow')
      break;
    case 'rock':
      buttons.player1.rock.classList.add('glow')
      break;
    case 'paper':
      buttons.player1.paper.classList.add('glow')
      break;
    case 'scissors':
      buttons.player1.scissors.classList.add('glow')
      break;
  }
  switch (player2Choice) {
    case 'random':
      buttons.player2.random.classList.add('glow')
      break;
    case 'rock':
      buttons.player2.rock.classList.add('glow')
      break;
    case 'paper':
      buttons.player2.paper.classList.add('glow')
      break;
    case 'scissors':
      buttons.player2.scissors.classList.add('glow')
  }
}

function setPlayer2(input) {
  player2Choice = input
  play(player1Choice, input)
  console.log(`set player2 to ${player2Choice}`)
  drawShadows()
}
function setPlayer1(input) {
  player1Choice = input
  play(player1Choice, player2Choice)
  console.log(`set player1 to ${player1Choice}`)
  drawShadows()
}