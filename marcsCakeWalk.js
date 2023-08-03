function marcsCakewalk(calorie) {
    let sortedCalorie = calorie.sort((a,b) => b-a)
    let minCalories = 0;
    for(let i=0; i<sortedCalorie.length; i++){
        minCalories += (2**i) * sortedCalorie[i] 
    }
    return minCalories
}

console.log(marcsCakewalk([5,10,7]))