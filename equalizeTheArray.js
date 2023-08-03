function equalizeArray(arr) {
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        if(mp.has(arr[i])){
            mp.set(arr[i], mp.get(arr[i])+1);
        }else{
            mp.set(arr[i], 1)
        }
    }
    let max = -Infinity;
    for(let i of mp.keys()){
        if(mp.get(i) > max){
            max = mp.get(i)
        }
    }
    // console.log(mp)

    return arr.length-max
}

console.log(equalizeArray([10,27,9,10,100,38,30,32,45,29,27,29,32,38,32,38,14,38,29,30,63,29,63,91,54,10,63]))