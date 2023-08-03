function squares(a, b) {
    let start = Math.ceil(Math.sqrt(a));
    let end = parseInt(Math.sqrt(b))
    return end - start + 1
}

console.log(squares(17, 24))