function maj(A){
    A.sort((a,b)=>{
        return a-b
    })
    return A[parseInt(A.length/2)]
}

let A = [2,1,1]
console.log(maj(A))
// let map = new Map()
// for(let i=1;i<n;i++){
//     if(map.has(i) === undefined){
//         map.set(i, [A[i]])
//     }else{
//         map.set(i,[A[i]])
//     }
// }
// console.log(map)
// A.sort((a,b)=> {
//     return a-b
// })

// console.log(A[parseInt(A.length/2)])