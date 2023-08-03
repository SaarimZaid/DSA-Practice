let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/* input:-
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc
 */

function designerPdfViewer(h, word) {
    let ary = 0;
    for(let i=0; i<word.length; i++){
        let letter = word.charCodeAt(i) - 97
        if(ary < h[letter]){
            ary = h[letter]
        }
    }
    return ary * word.length
}

let ar = readLine().split(' ').map(Number)
let word = readLine()
console.log(designerPdfViewer(ar, word))