function marsExploration(s) {
    let count = 0;
    let l = parseInt(s.length/3);
    let orignalStr = "SOS".repeat(l);
    for(let i=0;i<s.length;i++){
        if(s[i] === orignalStr[i]){
            continue;
        }else{
            count++;
        }
    }
    return count;
}

console.log(marsExploration('SOSSPSSQSSOR'))