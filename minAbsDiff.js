//brutforce solution---------->
function minimumAbsoluteDifference(arr) {
    let diff = Infinity;
    // console.log(arr.length)
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length-1;j++){
            // console.log(arr[j+1])
            if(Math.abs(arr[i]-arr[j+1]) < diff){
                diff = Math.abs(arr[i]-arr[j+1])
                // console.log(arr[i],'-',arr[j+1],'=',Math.abs(arr[i]-arr[j+1]))
            }
        }
    }
    return diff
};

//efficient solution--------------->
function minAbsDiff(arr){
    let diff = Infinity;
    arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length-1; i++){
        if(Math.abs(arr[i] - arr[i+1]) < diff){
            diff = Math.abs(arr[i]-arr[i+1]);
        }
    }
    return diff
}

let ar = [-59,-36,-13,1,-53,-93,-2,-54,100]
console.log(minimumAbsoluteDifference(ar));

console.log(minAbsDiff(ar))