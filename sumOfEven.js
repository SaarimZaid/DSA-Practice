let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine())
let arr = readLine().split(' ').map(Number)
let sum  = 0
for(let i=0; i<n; i++){
    if(arr[i]%2 === 0){
        sum += arr[i]
    }
}

console.log(sum)