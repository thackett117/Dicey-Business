let btnGenerate = document.getElementById('btnGenerate');
let diceContainer = document.getElementById('diceContainer');
let btnRoll = document.getElementById('btnRoll');
let btnSum = document.getElementById('btnSum');
let diceArray = [];
let counter = 0;


class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = counter;
        this.roll();
        diceContainer.appendChild(this.div);
        diceArray.push(this);
        this.div.addEventListener('click', () => this.roll());
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let index = diceArray.indexOf(this);
            diceArray.splice(index, 1);
        });
        
    }

    roll() {
        this.value = randomDieNum(1, 6);
        this.div.innerText = this.value;
    }
}


btnGenerate.addEventListener('click', () => {
    new Die();
    counter++;
})

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