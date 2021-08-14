const Player = require('./Player');
const Game = require('./Game');


const bingoGame = new Game();
let initBingoGame = bingoGame.init()
let players = new Array(new Player('Sebastian'));

let numberCalled = initBingoGame.next().value;
let winnerFound = false;

while(numberCalled && !winnerFound) {
    console.log(numberCalled);
    for(let player in players) {
        players[player].checkNumberCalled(numberCalled);
        let checkWinner = bingoGame.checkPlayerBingo(players[player]);
        if(checkWinner) {
            winnerFound = true;
            return `Player ${players[player].name} has won the game`
        }
        console.log('Not winner found');
    }
    numberCalled = initBingoGame.next().value;
}
