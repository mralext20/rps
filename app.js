
let scale = document.getElementById('rps-state')
let player1Played = document.getElementById('rps-player1-played')
let player2Played = document.getElementById('rps-player2-played')


let player2Choice = 'random';
let player1Choice = 'random';

let player1Last;
let player2Last;


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
  if (choice1 == 'random') {
    choice1 = randomPlay()
    player1Last = choice1;
  } else {
    player1Last = undefined;
  }
  if (choice2 == 'random') {
    choice2 = randomPlay()
    player2Last = choice2;
  } else {
    player2Last = undefined;
  }

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
  drawShadows()
  return result
}

let states = {
  'winner': '<i class="fas fa-balance-scale-left fa-10x"></i>',
  'loser': '<i class="fas fa-balance-scale-right fa-10x"></i>',
  'draw': '<i class="fas fa-balance-scale fa-10x"></i>'
}

let moves = {
  'rock': '<i class="fa fa-10x fa-hand-rock"></i>',
  'paper': '<i class="fas fa-10x fa-hand-paper"></i>',
  'scissors': '<i class="fas fa-10x fa-hand-scissors"></i>'
}

function drawState(state) {

  scale.innerHTML = states[state]
  player1Played.innerHTML = moves[player1Last || player1Choice]
  player2Played.innerHTML = moves[player2Last || player2Choice]

}

function switchPlayerAddEffect(played, player, effect) {
  switch (played) {
    case 'random':
      player.random.classList.add(effect)
      break;
    case 'rock':
      player.rock.classList.add(effect)
      break;
    case 'paper':
      player.paper.classList.add(effect)
      break;
    case 'scissors':
      player.scissors.classList.add(effect)
  }
}

function drawShadows() {
  Object.values(buttons.player1).forEach(element => {
    element.classList.remove('glow')
    element.classList.remove('glow-wrong')
  });
  Object.values(buttons.player2).forEach(element => {
    element.classList.remove('glow')
    element.classList.remove('glow-wrong')
  });

  switchPlayerAddEffect(player1Choice, buttons.player1, 'glow')
  switchPlayerAddEffect(player1Last, buttons.player1, 'glow-wrong')
  switchPlayerAddEffect(player2Choice, buttons.player2, 'glow')
  switchPlayerAddEffect(player2Last, buttons.player2, 'glow-wrong')

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






// on load

drawShadows()