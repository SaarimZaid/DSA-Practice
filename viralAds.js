function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;
    for(let i=0;i<n;i++){
        let like = parseInt(shared/2);
        cumulative += like;

        shared = parseInt(shared/2)*3;
        // like = parseInt(shared/2);
        // console.log(cumulative)
    }
    return cumulative
}

console.log(viralAdvertising(5));