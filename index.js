const Player = require("./Player");
const Game = require("./Game");

const bingoGame = new Game();
let initBingoGame = bingoGame.init();
let players = new Array(
  new Player("Sebastian"),
  new Player("Jugador 2"),
  new Player("Jugador 3"),
  new Player("Jugador 4")
);

let numberCalled = initBingoGame.next().value;
let winnerFound = false;

// force winner
let winner = players[0];
winner.useFreeNumber();

while (numberCalled && !winnerFound) {
  console.log(numberCalled);
  for (let player in players) {
    players[player].checkNumberCalled(numberCalled);
    let checkWinner = bingoGame.checkPlayerBingo(players[player]);
    if (checkWinner) {
      winnerFound = true;
      return `Player ${players[player].name} has won the game`;
    }
  }
  numberCalled = initBingoGame.next().value;
}
console.log("Not winner found");
