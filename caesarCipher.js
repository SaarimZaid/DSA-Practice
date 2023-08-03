function caesarCipher(s, k) {
    console.log(s)
    let encryptedStr = [];
    // k = k%26
    for(let i=0;i<s.length; i++){
        let asciiVal = s.charCodeAt(i)
        if(asciiVal >= 97 && asciiVal <= 122){
            let char = asciiVal + k;
            if(char >= 122){
                encryptedStr.push(String.fromCharCode(97 + (asciiVal - 97 + k)%26))
            }else{
                encryptedStr.push(String.fromCharCode(char))
            }
        }else if(asciiVal >= 65 && asciiVal <= 90){
            let char = asciiVal + k;
            if(char >= 90){
                encryptedStr.push(String.fromCharCode(65 + (asciiVal - 65 + k)%26));
            }else{
                encryptedStr.push(String.fromCharCode(char));
            }
        }else{
            encryptedStr.push(s[i])
        }
    }
    // console.log(encryptedStr)
    return encryptedStr.join('')
}

console.log(caesarCipher('Aa', 5));

// let str = '}'
// console.log(str.charCodeAt())