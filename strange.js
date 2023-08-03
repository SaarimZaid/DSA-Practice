let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine())
let count = 0
for (let i=0; i<n; i++){
    let a = readLine().split('').map(Number)
    if(a[0]*a[1] < a[0]+a[1]){
        count++
    }
}

console.log(count)