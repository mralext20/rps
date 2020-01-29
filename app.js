
let target = document.getElementById('rps-state')

let player2Choice;
let player1LastChoice = 'rock';


/** plays a game of rock paper sicors.
 * @param {string} choice1 - the first player's choice.
 * @param {string} choice2 - the second player's choice.
 * @returns {string} - what state the first player is in, winning, lost, or draw.
 */
function rpsLogic(choice1, choice2) {
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
 * @param {string} [choice2=randomPlay() ] the second player's choice.
 */
function play(choice1, choice2 = player2Choice || randomPlay()) {
  player1LastChoice = choice1;
  let result = rpsLogic(choice1, choice2)
  // alert(result)
  drawState(result)
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

function setPlayer2(input) {
  player2Choice = input
  play(player1LastChoice, input)
  console.log(`set player2 to ${player2Choice}`)
}