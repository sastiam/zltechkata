const BingoCard = require('./BingoCard');


const Player = function(name) {
    this.name = name;
    this.bingoCard = new BingoCard().generateNewCard();
}

Player.prototype.checkNumberCalled = function(number) {
    for(let column in this.bingoCard) {
        let foundNumber = this.bingoCard[column].indexOf(number);
        if(foundNumber > -1) {
            this.bingoCard[column].splice(foundNumber, 1);
            return `${this.name} found number ${number} in column ${column}`
        }
    }
    return false;
}

Player.prototype.useFreeNumber = function() {
    let freeNumber = this.bingoCard['N'].indexOf('FREE');
    if(freeNumber > -1) {
        this.bingoCard['N'].splice(freeNumber, 1);
        return `Player ${this.name} used free number`
    }
    return `Player ${this.name} is already used free number`
}


module.exports = Player;