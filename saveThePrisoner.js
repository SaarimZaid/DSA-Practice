function saveThePrisoner(n, m, s) {
    let mod = m%n;
    let res = (mod+s-1)%n
    if(res === 0){
        return s;
    }else{
        return res
    }
}

console.log(saveThePrisoner(3,7,3))