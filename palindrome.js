// check if the given string/number is palindrome or not

let str = 'saaes'
let p = str[0], q = str[str.length-1]
let flag = true;
for(let i=0; i<str.length/2; i++){
    console.log(p, q)
    if(p === q){
        p = str[i+1]
        q = str[str.length - (i+2)]
        continue;
    }else{
        flag = false;
        break;
    }
}
if(flag){
    console.log('String is Palindrome')
}else {
    console.log('Not Palindrome')
}