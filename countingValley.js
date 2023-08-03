function countingValleys(steps, path) {
    let seaLevel = 0;
    let valley = 0
    for(let i=0;i<steps; i++){
        if(path[i] === 'D'){
            seaLevel--
        }else{
            console.log(seaLevel)
            if(seaLevel === -1){
                valley++
            }
            seaLevel++
        }
    }
    return valley
}

let steps = 10;
let path = ['U','D','D','D','U','D','U','U','D','U'];
console.log(countingValleys(steps, path))