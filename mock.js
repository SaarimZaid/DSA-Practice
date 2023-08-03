// function substract(n){
//     while(n>0){
//         if(n%2===0 && n>0){
//             n -= 11
//         }else if(n%2!==0 && n>0){
//             n -= 21;
//         }
//     }
//     return n
// }

// let n = 35;
// console.log(substract(n))

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function peakElement(n, ar){
    let index;
    if(ar[0]>ar[1]){
        index = 1
    }
    if(ar[ar.length-1]>ar[ar.length-2]){
        if(index > ar.length || index===undefined) index = ar.length
    }
    let flag = false;
    for(let i=1; i<n; i++){
        if(ar[i]>ar[i+1] && ar[i]>ar[i-1]){
            flag = true;
            if(index > i+1){
                index = i+1
            }
            break;
        }
    }
    if(flag || index !== undefined){
        return index;
    }else{
        return -1
    }
}

let t = parseInt(readLine());
while(t--){
    let n = parseInt(readLine());
    let ar = readLine().split(' ').map(Number)
    console.log(peakElement(n, ar))
}
