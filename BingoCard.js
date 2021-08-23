const _ = require("underscore");

/*
It receives as a parameter a minimum and maximum number, returning as a result an array of 5 elements with numbers within that range of the two numbers */
const generateArrayNumbers = (min, max) => {
  let passedArray = false;
  let newArr;
  while (!passedArray) {
    newArr = Array.from(Array(5), () => _.random(min, max));
    let notDuplicates = new Set(newArr).size === newArr.length;
    if (notDuplicates) {
      passedArray = true;
    }
  }
  return newArr;
};

const BingoCard = function () {
  this.card = {};
};

BingoCard.prototype.generateNewCard = function () {
  // An array is created with the bingo rows and a minimum and maximum value is assigned by default
  let columns = ["B", "I", "N", "G", "O"];
  let minDefault = 1;
  let maxDefault = 15;

  // It goes through the columns where the random numbers are generated in the card object
  columns.forEach((row) => {
    this.card[row] = generateArrayNumbers(minDefault, maxDefault);
    minDefault = maxDefault + 1;
    maxDefault = maxDefault + 15;
  });

  // The intermediate value of the intermediate column is changed by the word 'FREE'
  let middleColumn = this.card["N"];
  middleColumn = [...middleColumn, (middleColumn[2] = "FREE")];

  return this.card;
};

module.exports = BingoCard;
