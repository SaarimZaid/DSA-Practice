function pageCount(n, p) {
    let diff = n-p;
    if(diff < p){
        //starting from start
        if(n === p) return 0;

        if(n%2 === 0){
            return parseInt(1+(diff-1)/2);
        }else{
            return parseInt(diff/2)
        }
    }else{
        //starting from last
        return parseInt(p/2)
    }


    // let fromRight = parseInt(p/2)

    // let fromLeft = 0;

    // if(n%2 === 0){
    //     fromLeft = parseInt((n+1+p)/2)
    // }else{
    //     fromLeft = parseInt((n+p)/2);
    // }
    // return fromLeft < fromRight ? fromLeft : fromRight
}

console.log(pageCount(5, 4))