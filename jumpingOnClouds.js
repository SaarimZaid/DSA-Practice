function jumpingOnClouds(c) {
    let count = 0;
    let p = 0;
    while(p < c.length-1){
        if(c[p+2] == 0){
            count++
            p += 2
        }else{
            count++
            p += 1
        }
    }
    return count
}


console.log(jumpingOnClouds([0, 0, 1 ,0 ,0 ,1 ,0]))