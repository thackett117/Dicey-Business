//grabbing all the elements
const btnGenerate = document.getElementById("btnGenerate"),
  diceContainer = document.getElementById("diceContainer"),
  btnRoll = document.getElementById("btnRoll"),
  btnSum = document.getElementById("btnSum"),
  btnReset = document.getElementById("btnReset");

//global array to store dice objects
let diceArray = [];
let counter = 0;

//die class to create a die object
class Die {
  constructor(value) {
    this.value = value;
    this.div = document.createElement("div");
    this.div.className = "die";
    this.div.id = counter;
    this.showDie();
    diceContainer.appendChild(this.div);
    diceArray.push(this);
    this.div.addEventListener("click", () => this.reRoll()); //roll die on click
    this.div.addEventListener("dblclick", () => {
      //remove die from page
      this.div.remove();
      let index = diceArray.indexOf(this); //returns the location of the die that was clicked in the dice array
      diceArray.splice(index, 1); //removes the die from the array
    });
  }

  showDie() {
    let dieFace = '&#127922'
    if (this.value === 1) {
        dieFace = '&#9856'
    }else if (this.value === 2) {
        dieFace = '&#9857'
    }else if (this.value === 3) {
        dieFace = '&#9858'
    }else if (this.value === 4) {
        dieFace = '&#9859'
    }else if(this.value === 5) {
        dieFace = '&#9860'
    }else if (this.value === 6) {
        dieFace = '&#9861'
    }
    this.div.innerHTML = dieFace;
  }
  //re-roll changes the value of the die and then runs the roll method again
  reRoll() {
    this.value = randomDieNum(1, 6);
    this.showDie();
  }
}

//creates new die object
btnGenerate.addEventListener("click", () => {
  new Die(randomDieNum(1, 6));
  counter++;
});

//rolls all dice again
btnRoll.addEventListener("click", () => {
  diceArray.forEach( die => {
    die.reRoll();
  });
});

//takes the sum of all the dice in the array
btnSum.addEventListener("click", () => {
  let sum = 0;
  diceArray.forEach( die => {
    sum += die.value;
  });
  alert(sum);
});

//reloads the page
btnReset.addEventListener("click", () => location.reload());

//random number between 2 numbers
randomDieNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};