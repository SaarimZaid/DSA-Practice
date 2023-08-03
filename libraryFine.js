function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(y1 > y2){
        return 10000;
    }
    if(y1 === y2 && m1 > m2){
        let mDiff = m1-m2;
        return 500*mDiff;
    }
    if(y1 === y2 && m1 === m2 && d1 > d2){
        let dDiff = d1 - d2;
        return 15 * dDiff;
    }
    else{
        return 0;
    }
}

console.log(libraryFine(8, 7, 2018, 5, 7, 2018))