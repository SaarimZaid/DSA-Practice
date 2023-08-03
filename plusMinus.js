function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0) positiveCount++
        else if(arr[i] < 0) negativeCount++
        else if(arr[i] === 0) zeroCount++ 
    }
    let l = arr.length
    console.log((positiveCount/l).toFixed(6));
    console.log((negativeCount/l).toFixed(6));
    console.log((zeroCount/l).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);