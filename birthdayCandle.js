function birthdayCakeCandles(candles) {
    let tallest = 0;
    for(let i=0; i<candles.length; i++){
        if(tallest < candles[i]){
            tallest = candles[i]
        }
    }
    let count = 0;
    for(let i=0; i<candles.length; i++){
        if(candles[i] === tallest) count++
    }
    return count
}

console.log(birthdayCakeCandles([3, 3, 1, 3, 3]))