
function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0;
    for(let i=0; i<bill.length; i++){
        if(i === k) continue
        else{
            total += bill[i]
        }
    }
    // console.log(total)
    total = b - parseInt(total/2)
    if(total === 0){
        return "Bon Appetit"
    }else {
        return total;
    }

}

console.log(bonAppetit([3, 10, 2, 9], 1, 7))