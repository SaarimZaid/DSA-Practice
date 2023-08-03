function minimumDistances(a) {
    let minDistance = Infinity;
    for(let i=0;i<a.length; i++){
        for(let j=i; j<a.length-1; j++){
            if(a[i] === a[j+1]){
                // console.log(a[i], a[j+1])
                let diff = (j+1) - i;
                if(diff < minDistance) minDistance = diff;
            }
        }
    }
    if(minDistance === Infinity) return -1
    else return minDistance
}

console.log(minimumDistances([1,2,3,4,10,3]));