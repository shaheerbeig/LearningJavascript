'use strict';
/*
let candrive = true;
let hasliscence = true;
if (candrive && hasliscence) {
    console.log(`go drive`)
}

function logger() {
    console.log(`my name is jonas`)
}
logger();
logger();
logger();


function fruitprocessor(apples, mangoes) {
    console.log(apples, mangoes)
    const juice = (`i will have ${apples} apples and ${mangoes} mangoes.`)
    return juice
}
console.log(fruitprocessor(5, 0));
*/
/*
const food = prompt(`what would u like to eat??`);
console.log(food);
*/
/*
function calcage1(birthyear) {
    return 2037 - birthyear
}
const age1 = calcage1(1991);

const calcage2 = function (birthyear) {
    return 2037 - birthyear
}
const age2 = calcage2(1991);
console.log(age1, age2);

const calcage3 = birthyear => 2037 - birthyear
const age3 = calcage3(2022);
console.log(age3);

const calcage4 = birthyear => {
    const age4 = 2037 - birthyear
    const agebeforeretiremnet = 65 - age4
    return agebeforeretiremnet;
}
console.log(calcage4(2020));
*/
/*
function cutfruit(fruit) {
    return fruit * 4;
}

function fruitmachine(kiwi, banana) {
    const kiwipieces = cutfruit(kiwi);
    const bananapieces = cutfruit(banana);
    const juiceobtained = (`i want to have ${kiwipieces} of kiwi and ${bananapieces} of banana!!`)
    return juiceobtained;
}
console.log(fruitmachine(4, 5));

const friends = ['ali', 'taha', 'sarah']
console.log(friends);

const age = ['Ali', 1999]
console.log(age);
*/
/*
function calcage(birthyear) {
    return 2037 - birthyear
}
const years = [2003, 2005, 2008, 2020];
const age1 = calcage(years[1]);
const age2 = calcage(years[3]);
console.log(age1, age2);

const friends = ['ali', 'taha', 'haad'];
friends.push('jay');
console.log(friends.length);
friends.pop('jay');
console.log(friends);
*/

//task 1
const calctip = function (billvalue) {
    let tip = 0;
    if (billvalue >= 50 && billvalue <= 300) {
        tip = billvalue * 0.15
    } else {
        tip = billvalue * 0.20
    }
    return tip;
}
//task 2
const bills = [125, 555, 44];
console.log(bills);

//task 3 
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tips);




















