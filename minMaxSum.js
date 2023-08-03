function miniMaxSum(arr) {
    arr.sort((a,b) => {
        return a-b;
    })
    let minSum = 0;
    let maxSum = 0;

    //counting maximum sum
    for(let i=1;i<arr.length;i++){
        maxSum += arr[i];
    }
    //counting manimum sum
    for(let i=0;i<arr.length-1;i++){
        minSum += arr[i]
    }
    console.log(minSum, maxSum)
}

let ar = [1]
miniMaxSum(ar)