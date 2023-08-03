function beautifulDays(i, j, k) {
    let days = 0;
    for(let p=i; p<=j; p++){
        let rev = p.toString().split('').reverse().join('')
        console.log(Math.abs(i - parseInt(rev)))
        if(Math.abs(i - parseInt(rev)) % k === 0){
            days++;
        }
        i++
    }
    return days
}

console.log(beautifulDays(20, 23, 6))
// console.log(0%6 === 0)