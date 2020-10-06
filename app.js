let btnGenerate = document.getElementById('btnGenerate');
let diceContainer = document.getElementById('diceContainer');
let btnRoll = document.getElementById('btnRoll');
let diceArray = [];


class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        diceContainer.appendChild(this.div);
        diceArray.push(this);
        
    }

    roll() {
        this.value = randomDieNum(1, 6);
        this.div.innerText = this.value;
    }
}


btnGenerate.addEventListener('click', function() {
    new Die();
})

btnRoll.addEventListener('click', () => {
    diceArray.forEach(die => {
        die.roll();
    })
})


randomDieNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}