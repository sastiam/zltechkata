const _ = require('underscore');

const Game = function() {
    this.numbersOfBingo = _.range(1, 76);
}

Game.prototype.init = function* () {
    let remainingNumbers = this.numbersOfBingo.length;
    while(remainingNumbers) {
        let numberCalled = _.sample(this.numbersOfBingo);
        this.numbersOfBingo.splice(this.numbersOfBingo.indexOf(numberCalled), 1);
        yield numberCalled;
        
    }
}

Game.prototype.checkPlayerBingo = function({bingoCard}) {
    for(let column in bingoCard) {
        if(bingoCard[column].length > 0) {
            return false;
        }
    }
    return true;
}

module.exports = Game