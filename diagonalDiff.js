let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/* input is:-
3
11 2 4
4 5 6
10 8 -12
 */

function diagonalDiff(ar){
    let sumOfLeftToRightDiagonal = 0;
    let sumOfRightToLeftDiagonal = 0;
    let j = ar.length - 1;
    for(let i=0; i<ar.length; i++){
        sumOfLeftToRightDiagonal += ar[i][i]
        sumOfRightToLeftDiagonal += ar[i][j]
        j--
    }
    return Math.abs(sumOfLeftToRightDiagonal - sumOfRightToLeftDiagonal) 
}

console.log(diagonalDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]]))