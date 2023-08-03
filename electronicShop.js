function getMoneySpent(keyboards, drives, b) {
    let cost = -1;
    for(let i=0;i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            if(keyboards[i]+drives[j] <= b && keyboards[i]+drives[j] > cost){
                cost = keyboards[i]+drives[j];
            }
        }
    }
    return cost ;
}

console.log(getMoneySpent([40,50,60], [5,8,12], 60));