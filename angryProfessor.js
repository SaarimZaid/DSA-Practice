function angryProfessor(k, a) {
    let present = 0;
    let absent = 0;
    for(let i=0; i<a.length; i++){
        if(a[i] <= 0) present++
        else absent++
    }
    if(present >= k) return 'NO'
    else return 'YES'
}

console.log(angryProfessor(3, [-1,-3,4,2]))