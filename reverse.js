// // Reverse String without using any inbuilt function.

// // reversing a String
// let str = 'sarim'
// let ary = [];

// for (let i=str.length; i>0; i--){
//     ary.push(str[i-1])
// }
// console.log(ary.join(''))
// // console.log(...ary)




// // reversing a Number
// let num = -54321;
// let rev=0;

// if(num < 0){
//     let number = Math.abs(num)
//     // console.log(number)
//     while(number){
//         let n = parseInt(number/10);
//         // console.log(number)
//         let digit = number % 10;
//         rev *= 10 ;
//         rev += digit 
//         // console.log(rev)
//         digit = n
//         number = n
//     }
//     console.log(-1*rev)
// }
// else{
//     while(num){
//         let n = parseInt(num/10);
//         let digit = num % 10;
//         rev *= 10 ;
//         rev += digit 
//         digit = n
//         num = n
//     }
//     console.log(rev)
// }



// // Solved with recursion
// const num1 = 12345;
// const reverseNumber = (num, res = 0) => {
//    if(num){
//       return reverseNumber(Math.floor(num / 10), (res*10)+(num % 10));
//    };
//    return res;
// };
// console.log(reverseNumber(num1));




let A = -123
if(A < 0){
    console.log(0)
}
let revv = String(A).split('').reverse().join('');

if(A == revv){
    return 1
}else{
    0
}