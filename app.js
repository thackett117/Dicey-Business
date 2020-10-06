let btnGenerate = document.getElementById('btnGenerate');
let diceContainer = document.getElementById('diceContainer');
let btnRoll = document.getElementById('btnRoll');
let btnSum = document.getElementById('btnSum');
let diceArray = [];


class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        diceContainer.appendChild(this.div);
        diceArray.push(this);
        console.log(this);
        
    }

    roll() {
        this.value = randomDieNum(1, 6);
        this.div.innerText = this.value;
    }
}


btnGenerate.addEventListener('click', () => new Die())

btnRoll.addEventListener('click', () => {
    diceArray.forEach(die => {
        die.roll();
    })
})

btnSum.addEventListener('click', () => {
    let sum = 0;
    diceArray.forEach(die => {
        sum = sum + die.value;
    })
    alert(sum);
})

randomDieNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum(a, b) {
    return a + b;
}