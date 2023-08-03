// function permutationEquation(p) {
//     let ar = [];
//     for(let i=1; i<=p.length; i++){
//         let first = p.indexOf(i)+1
//         let second = p.indexOf(first)+1
//         ar.push(second);
//     }
//     return ar
// }

// console.log(permutationEquation([2,5,11,10,1,14,7,3,16,9,8,6,18,12,15,17,13,4]));


function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minSum = 0, maxSum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === min){
            continue;
        }else{
            maxSum += arr[i];
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] === max){
            continue;
        }else{
            minSum += arr[i];
        }
    }
    console.log(minSum, maxSum)
}

miniMaxSum([1,3,5,7,9])