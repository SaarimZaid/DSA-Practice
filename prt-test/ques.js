let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}	

let n = parseInt(readLine())
let str = readLine()
let ary = str.split(' ')
let mp = new Map();
for(let i=0; i<ary.length; i++){
    if(mp.has(ary[i])){
        mp.set(ary[i], mp.get(ary[i])+1)
    }else{
        mp.set(ary[i], 1)
    }
}
let res = []
for(let i=0; i<mp.size; i++){
    if(mp.get(ary[i]) > n){
        res.push(ary[i])
    }
}
let ans = new Set(res)

let a = [...ans]
a.forEach(i => console.log(i))