let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function appendAndDelete(s, t, k) {
    let m = 0;
    let n = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] === t[i]){
            continue;
        }else{
            m = s.length-i;
            break;
        }
    }
    for(let i=0; i<t.length; i++){
        if(t[i] === s[i]){
            continue;
        }else{
            n = t.length - i;
            break;
        }
    }
    if(k < m+n){
        return 'No'
    }else if(((k-(m+n)) % 2 === 0)){
        return 'Yes'
    }else if(k > s.length+t.length){
        return 'Yes'
    }else{
        return 'No'
    }
}

let s = readLine();
let t = readLine();
let k = parseInt(readLine());
console.log(appendAndDelete(s,t,k));