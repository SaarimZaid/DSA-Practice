let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function bigSorting(unsorted) {
    unsorted.sort((a,b) => a-b)
    return unsorted
}

// let n = parseInt(readLine());
// let ar = []
// for(let i=0; i<n; i++){
//     ar.push(readLine())
// }
// console.log(bigSorting(ar))



////////==================================///////////
function comp(left, right)
{
    // if length of both string are equals then sort
    // them in lexicographically order
    if (left.length == right.length){
        return left < right;}
 
    // Otherwise sort them according to the length
    // of string in ascending order
    else
        // console.log(left, right);
        return left.length - right.length;
}

function SortingBigIntegers(arr, n)
{
 
    // Copy the arr[] elements to sortArr[]
    let sortArr = [...arr]
 
    // Inbuilt sort function using function as comp
 
    sortArr.sort(comp);
 
    // Print the final sorted array
    for (ele of sortArr)
        console.log(ele + " ");
}


let n = parseInt(readLine());
let ar = []
for(let i=0; i<n; i++){
    ar.push(readLine())
}
// console.log(ar)
 
SortingBigIntegers(ar, n);

console.log(bigSorting(ar));