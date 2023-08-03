function recurringName(k, arr){
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        if(mp.has(arr[i])){
            mp.set(arr[i], mp.get(arr[i]) +1);
        }else{
            mp.set(arr[i], 1);
        }
    }
    for(let i of mp.keys()){
        // console.log(i)
        if(mp.get(i) > k){
            console.log(i);
        }
    }
}

recurringName(2, ["hughie","homelander","noir","maeve","hughie","noir","a-train","stormfornt","hughie","noir","a-train","A-train"])