// Merge two arrays into a new array without using any inbuilt function.

let ary1 = [1,4,5,3];
let ary2 = [8,2,10,6,3,9];
let newAry = ary1;

for(let i=0; i<ary2.length; i++){
    newAry.push(ary2[i])
}
console.log(newAry)