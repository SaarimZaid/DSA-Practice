function circularArrayRotation(a, k, queries) {
    for(let i=0; i<k; i++){
        a.unshift(a.pop())
    }
    let newAry = [];
    for(let i=0;i<queries.length; i++){
        newAry.push(a[queries[i]])
    }
    return newAry
}

let a = [1,2,3,4,5]; 
let k = 2; 
let queries = [0,1,2];
console.log(circularArrayRotation(a, k, queries));