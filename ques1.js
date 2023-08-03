let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function peakNum(num, arr){
    let p = arr[0];           //
    for(let i=1; i<num; i++){ //i=1,2,3
        if(p>arr[i]) return i  //f,f,t
        else if(p<arr[i]){ //t,t
            p = arr[i]     //p=3,6
        }
        else if(arr[num-1] > arr[num-2]) return num
        else return -1
    }
}

let t = parseInt(readLine());
while(t--){
    let num = parseInt(readLine());
    let arr = readLine().split(' ').map(Number)
    
    if(peakNum(num, arr)=== undefined){
        console.log(num)
    }else
    console.log(peakNum(num, arr))
}