let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function luckBalance(k, contests) {
    let impContests = [];
    let notImpContests = [];
    for(let i=0; i<contests.length; i++){
        if(contests[i][1] === 1){
            impContests.push(contests[i][0])
        }else{
            notImpContests.push(contests[i][0])
        }
    }
    // console.log(impContests.length);
    // console.log(notImpContests.length);
    if(k>=impContests.length){
        let sum = 0;
        for(let i=0;i<contests.length;i++){
            sum+=contests[i][0]
        }
        return sum
    }

    if(k === contests.length){
        let sumOfImp = 0;
        let sumOfNotImp = 0;
        for(let i=0; i<impContests.length; i++) sumOfImp+=impContests[i]

        for(let i=0; i<notImpContests.length; i++) sumOfNotImp+=notImpContests[i]

        return sumOfNotImp + sumOfImp;
    }

    impContests.sort((a,b) => a-b)
    let minWill = 0;

    if(k > impContests.length){
        for(let i=0; i<impContests.length; i++){
            minWill += impContests[i];
        }
    }else{
        for(let i=0; i<impContests.length-k; i++){
            minWill += impContests[i];
        }
    }

    let will = 0;
    if(impContests.length){
        if(k > impContests.length){
            for(let i=impContests.length-1; i>=impContests.length; i--){
                will += impContests[i]
            }
        }else{
            for(let i=impContests.length-1; i>=impContests.length-k; i--){
                will += impContests[i]
            }
        }
    }
    for(let i=0; i<notImpContests.length; i++){
        will += notImpContests[i]
    }
    // console.log(will)
    return will - minWill
}

let mn = readLine().split(' ').map(Number);
let arr = [];
let k = mn[1];
let n = mn[0];
while(n--){
    arr.push(readLine().split(' ').map(Number));
}

console.log(luckBalance(k, arr));