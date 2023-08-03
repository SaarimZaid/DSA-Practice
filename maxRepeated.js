//Print the numbers which are repeated a maximum number of times and print how 
// many times it is repeated.

let ary = [2, 10, 3, 2, 4, 5, 4, 9, 0, 2];
let mp = new Map();
let count = 0;
for (let i=0; i<ary.length; i++){
    if(mp.has(ary[i])){
        mp.set((ary[i]), mp.get(ary[i])+1)
    }else{
        mp.set((ary[i]), 1)
        count++
    }
}
let max = 0;
for(i of mp.values()){
    if(i > max){
        max = i
    }
}
for(i of mp.keys()){
    if(mp.get(i) === max){
        console.log(i)
    }
}

let n;
let m = null
console.log(n, m)