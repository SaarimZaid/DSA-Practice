function serviceLane(width, cases) {
    let ar = [];
    for(let i=0; i<cases.length; i++){
        for(let j=0; j<1; j++){
            let c = width.slice(cases[i][j], cases[i][j+1] +1)
            ar.push(Math.min(...c))
            // console.log(i)
        }
    }
    return ar
}

let width = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
console.log(serviceLane(width, cases))

// console.log(width.slice(0,3+1))