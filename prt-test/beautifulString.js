let fs = require("fs");								
let data = fs.readFileSync(0, 'utf-8');								
let idx = 0;								
data = data.split('\n');								
								
function readLine() {								
idx++;								
return data[idx - 1].trim();								
}

function beautifulStr(str){
    for(let i=0; i<str.length; i++){
        
    }
}

let t = parseInt(readLine())
while(t--){
    let str = readLine()
    beautifulStr(str)
}
