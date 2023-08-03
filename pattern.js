let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let z = 1;
for(let i=1; i<=n; i++){
    for(let k=n-1; k>=i; k--){
        process.stdout.write(' ')
    }
    for(let j=1; j<=z; j++){
        // console.log(str+'*');
        process.stdout.write('.')
    }
    z += 2
    console.log();
}
let y = n;
for(let i=0; i<=y+2; i++){
    for(let k=i; k<=i; k++){
        process.stdout.write(' ')
    }
    for(let j=0; j<=y; j++){
        process.stdout.write('.')
    }
    y -= 2
    console.log();
}