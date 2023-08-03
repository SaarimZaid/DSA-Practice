function camelcase(s) {
    let count = 1;
    for(let i=0;i<s.length;i++){
        if(/[A-Z]/.test(s[i])){
            count++
        }
    }
    return count
}

console.log(camelcase('oneTwoThree'))