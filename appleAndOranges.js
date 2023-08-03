let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countOfApples = 0;
    let countOfOranges = 0;
    for(let i=0; i<apples.length; i++){
        let position  = a+apples[i];
        if(position >= s && position <= t){
            countOfApples++;
        }
    }
    for(let i=0; i<oranges.length; i++){
        let position  = b+oranges[i];
        if(position >= s && position <= t){
            countOfOranges++;
        }
    }
    console.log(countOfApples);
    console.log(countOfOranges);
}

let range = readLine().split(' ').map(Number)
let s = range[0];
let t = range[1];
let distance = readLine().split(' ').map(Number);
let a = distance[0];
let b = distance[1];
let mn = readLine().split(' ').map(Number)
let apples = readLine().split(' ').map(Number);
let oranges = readLine().split(' ').map(Number);

countApplesAndOranges(s,t,a,b,apples,oranges)
// console.log(s,t,a,b,apples,oranges)
