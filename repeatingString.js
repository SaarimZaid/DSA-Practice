function repeatedString(s, n) {
    let numberOfA = 0;//2
    for(let i=0; i<s.length; i++){
        if(s[i] === 'a') numberOfA++
    }
    let str = parseInt(n/s.length);//3
    let totalA = str*numberOfA//6
    let traverse = str * s.length//9
    let remaining = n - traverse//1

    for(let i=0; i<remaining; i++){
        if(s[i] === 'a') totalA++
    }
    return totalA
}

console.log(repeatedString('abc', 10))