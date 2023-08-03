function lonelyinteger(a) {
    let mp = new Map();
    for(let i=0; i<a.length; i++){
        if(mp.has(a[i])){
            mp.set(a[i], mp.get(a[i])+1)
        }else{
            mp.set(a[i], 1);
        }
    }
    // console.log(mp)
    let lonely;
    for(let i of mp.keys()){
        if(mp.get(i) === 1){
            lonely = i;
        }
    }
    if(lonely === undefined){
        return a[0];
    }else{
        return lonely
    }
}

console.log(lonelyinteger([1,1,0]))