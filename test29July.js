let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}		

// function series(n){
//     let sum = 0;
//     let str = '';
//     while(n--){
//         str += '9'
//         sum += parseInt(str);
//     }
//     return sum
// }

// console.log(series(parseInt(readLine())));

// function eatingSymbols(str){
//     let mind = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === '+') mind++;
//         else mind--
//     }
//     return mind
// }

// console.log(eatingSymbols(readLine()));

// function sumQuery(numAry, query){
//     let sum = 0;
//     if(query[1] === numAry.length-1){
//         query[1] = query[1]+1
//     }
//     for(let i=query[0]; i<query[1]; i++){
//         sum += numAry[i]
//     }
//     return sum
// }

// let n_q = readLine().split(' ').map(Number);
// let numAry = readLine().split(' ').map(Number);
// let n = n_q[1];
// while(n--){
//     let query = readLine().split(' ').map(Number);
//     console.log(sumQuery(numAry, query));
// }


function both_x(str, x){
    let mp1 = new Map();
    let mp2 = new Map();
    for(let i=0; i<str[0].length; i++){
        if(mp1.has(str[0][i])){
            mp1.set(str[0][i], mp1.get(str[0][i]) +1)
        }else{
            mp1.set(str[0][i], 1)
        }
    }
    for(let i=0; i<str[1].length; i++){
        if(mp2.has(str[1][i])){
            mp2.set(str[1][i], mp2.get(str[1][i]) +1)
        }else{
            mp2.set(str[1][i], 1)
        }
    }
    console.log(mp2)
    function checkFreq(ele){
        if(mp1.get(ele)===x && mp2.get(ele)===x){
            console.log(ele);
        }
    }
    for(let i=0;i<Math.max(str[0].length,str[1].length);i++){
        if(str[0].split('').includes(str[1].split('')[i])){
            checkFreq(str[1].split('')[i])
        }
    }
    
}

let n = parseInt(readLine());
let str = readLine().split(' ')
let num = parseInt(str.pop())
both_x(str, num);



// function unitDistance(ar){
//     if(ar[0] === ar[1]){
//         console.log('False')
//     }
//     else if(ar[0].length !== ar[1].length){
//         let diff = Math.abs(ar[0].length - ar[1].length)
//         if(diff > 1) console.log('False')
//         else {
//             let count = 1;
//             for(let i=0; i<Math.max(ar[0].length, ar[1].length); i++){
//                 if(ar[0][i] !== ar[1][i]){
//                     count++
//                 }
//             }
//             if(count > 1) console.log('False')
//             else console.log('True')
//         };
//     }
//     else if(ar[0].length === ar[1].length){
//         let count = 0;
//         for(let i=0; i<Math.max(ar[0].length, ar[1].length); i++){
//             if(ar[0][i] !== ar[1][i]){
//                 // console.log(ar[0][i], ar[1][i])
//                 count++
//             }
//         }
//         if(count > 1) console.log('False')
//         else console.log('True')
//     }
// }

// let t = parseInt(readLine());
// while(t--){
//     let ar = readLine().split(' ')
//     unitDistance(ar)
// }



// function sortedPair(ar){
//     let count = 0;
//     for(let i=0; i<ar.length; i++){
//         for(let j=i; j<ar.length-1; j++){
//             if(ar[i] <= ar[j+1]){
//                 // console.log(ar[i], ar[j+1]);
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }

// let n = parseInt(readLine());
// let ar = readLine().split(' ').map(Number);
// sortedPair(ar);

