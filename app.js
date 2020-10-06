//grabbing all the elements
let btnGenerate = document.getElementById("btnGenerate");
let diceContainer = document.getElementById("diceContainer");
let btnRoll = document.getElementById("btnRoll");
let btnSum = document.getElementById("btnSum");
let btnReset = document.getElementById("btnReset");

//global array to store dice objects
let diceArray = [];
let counter = 0;

//die class to create a die object
class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.className = "die";
    this.div.id = counter;
    this.roll();
    diceContainer.appendChild(this.div);
    diceArray.push(this);
    this.div.addEventListener("click", () => this.roll()); //roll die on click
    this.div.addEventListener("dblclick", () => {
      //remove die from page
      this.div.remove();
      let index = diceArray.indexOf(this); //returns the location of the die that was clicked in the dice array
      diceArray.splice(index, 1); //removes the die from the array
    });
  }
  //roll method to determine the value of the die
  roll() {
    this.value = randomDieNum(1, 6);
    this.div.innerText = this.value;
  }
}

//creates new die object
btnGenerate.addEventListener("click", () => {
  new Die();
  counter++;
});

//rolls all dice again
btnRoll.addEventListener("click", () => {
  diceArray.forEach((die) => {
    die.roll();
  });
});

//takes the sum of all the dice in the array
btnSum.addEventListener("click", () => {
  let sum = 0;
  diceArray.forEach((die) => {
    sum = sum + die.value;
  });
  alert(sum);
});

//reloads the page
btnReset.addEventListener("click", () => location.reload());

//random number between 2 numbers
randomDieNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
