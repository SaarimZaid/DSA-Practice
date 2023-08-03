function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i=0;i<n;i++){
        for(let j=i; j<n-1; j++){
            if((ar[i]+ar[j+1]) % k === 0){
                count++;
            }
        }
    }
    return count;
}

let n = 7; 
let k = 5;
let ar = [1, 2, 3, 4, 5, 6];

console.log(divisibleSumPairs(n, k, ar));


// console.log(3%3===0)