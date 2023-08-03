function a(A, B){
    A = A.concat(A)
    B = B.concat(B)
    // console.log(A, B)
    let start = 0;
    let curr = 0;
    for(let i=0;i<A.length; i++){
        if(A[i]-B[i]<0){
            start = i+1;
            curr = 0;
        }else if(A[i]-B[i] > 0){
            curr = curr + A[i] - B[i]
        }else if(i == start + A.length){
            return start
        }else return -1
    }
}
let A = [1, 2]
let B = [2, 1]
console.log(a(A, B))