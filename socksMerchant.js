function sockMerchant(n, ar) {
    let mp = new Map();
    for(let i=0;i<n; i++){
        if(mp.has(ar[i])){
            mp.set(ar[i], mp.get(ar[i])+1)
        }else{
            mp.set(ar[i], 1)
        }
    }
    // console.log(mp)
    let count = 0;
    
    mp.forEach(e => {
        if(e > 1){
            let m = parseInt(e/2)
            
            // console.log(m)
            count += m
        }
        
    })
    return count
}
let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(n, ar))