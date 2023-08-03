let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/* input for the ques
20
9
2
34
43
18
20
78
54
13
10 */

let k = parseInt(readLine());
let n = parseInt(readLine());
for(let i=0; i<n; i++){
    if(k === parseInt(readLine())) {
        console.log(i)
        break
    }
}