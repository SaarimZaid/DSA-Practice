// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }


let breads = 15;
let vegPattice = 3;
let nonVegPattice = 2;
let TikkiPattice = 1;
let priceVegBurger = 100;
let priceNonVegBurger = 125;
let priceTikkiBurger = 112;

let maxProfit = 0;

function profit(pattice, price){
    while(pattice--){
        if(breads>1){
            maxProfit += price
            breads -= 2
        }else break
    }
}

profit(nonVegPattice, priceNonVegBurger)
profit(TikkiPattice, priceTikkiBurger)
profit(vegPattice, priceVegBurger)

console.log(maxProfit)