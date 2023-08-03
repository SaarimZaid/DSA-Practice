let fs = require("fs");
const { join } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// let n = parseInt(readLine())
// let arr = []
// for(let i=0 ; i<n ; i++){
//     let digit = parseInt(readLine())
//     arr.push(digit)
// }
// // let diff = parseInt(readLine())
// // let sum = 0;
// // for(let i=0+diff; i<arr.length; i++){
// //     sum += arr[i]
// //     console.log(arr[i])
// // }
// // console.log(sum)

// // if(arr[0] < 1 && arr[1] < 1){
// //     console.log(false)
// // }if(arr[0] > 1 && arr[1] > 1){
// //     console.log(false)
// // }else{
// //     console.log(true)
// // }
// let flag = 1
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > arr[i+1] || arr[i] < arr[i+1] || arr[i] === arr[i+1]){
//         continue
//     }else{
//         flag = 0;
//         break
//     }
// }
// console.log(flag)

let n = parseInt(readLine())
let arr1 = []
for(let i=0;i<n; i++){
    arr1.push(readLine().split(' ').map(Number))
}
let m = parseInt(readLine())
let arr2 = []
for(let i=0;i<m; i++){
    arr2.push(readLine().split(' ').map(Number))
}
console.log(3)
let res = [[3, 3, 3],[3, 3, 3],[3, 3, 3]]
let res1 = [...res]
console.log(res1.join(' '))