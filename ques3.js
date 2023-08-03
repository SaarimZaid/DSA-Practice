let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num = parseInt(readLine());
// let val = num;
while(num>=0){
    if(num%2==0 && num>=0){
        num = num-11
    }else if(num%2==1 && num>=0){
        num = num-21
    }
}
console.log(num)