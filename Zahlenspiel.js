// Zahlen raten

function rndNum(minNum, maxNum) {
    return Math.floor(Math.random() * maxNum) + minNum;
};

let num1 = rndNum(1, 100);
let result = false;
let lives = 10;

console.log("Es wurde eine Zahl zwischen 1 und 100 ausgewürfelt, bitte raten sie");

while (result === false) {

    var prompt = require('prompt-sync')({
        sigint: true
    });
    var n = Number(prompt('Eingabe: '));

    if (n <= 100 && n >= 0) {
        if (n === num1) {
            console.log('Richtig!!!');
            result = true;
        } else {
            console.log('Leider Falsch');
            lives--;
            if (lives === 0) {
                console.log(`${lives} Versuche übrig`);
                console.log(`Die gesuchte Zahl war: ${num1}`);
                console.log('Game Over');
                result = true;
            } else if (num1 > n) {
                console.log(`Nummer ist größer als ${n}`);
                if(lives > 1) {
                    console.log(`${lives} Versuche übrig`);
                } else {
                    console.log(`${lives} Versuch übrig`);
                }
            } else {
                console.log(`Nummer ist kleiner als ${n}`);
                if (lives > 1) {
                    console.log(`${lives} Versuche übrig`);
                } else {
                    console.log(`${lives} Versuch übrig`);
                }
            };
        };
    } else {
        console.log('Error: Bitte Nummer zwischen 1-100 eingeben');
    };
};