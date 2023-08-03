function migratoryBirds(arr) {
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        if(mp.has(arr[i])){
            mp.set(arr[i], mp.get(arr[i])+1);
        }else{
            mp.set(arr[i], 1);
        }
    }
    // console.log(mp)
    let max = 0;
    for(let val of mp.values()){
        if(val > max){
            max = val
        }
    }
    let ans = []
    for(let i of mp.keys()){
        if(mp.get(i) === max){
            ans.push(i)
        }
    }
    return Math.min(...ans)
}

console.log(migratoryBirds([1, 1, 2, 2, 3]))