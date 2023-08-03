let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}	

function sortArray(arr, n){
    
    let mp = new Map();
    for(let i=0; i<n; i++){
        mp.set(arr[i], (mp.get(arr[i]) || 0 ) +1)
    }
    return arr.sort((a,b) => {
        if(mp.get(a) === mp.get(b)){
            return b-a;
        }
        return mp.get(a) - mp.get(b)
    })
    // console.log(mp)
}

let t = parseInt(readLine());

while(t--){
    let n = parseInt(readLine());
    let arr = readLine().split(' ').map(Number)
    let res = sortArray(arr, n)
    console.log(...res)
}