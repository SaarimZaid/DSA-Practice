function catAndMouse(x, y, z) {
    if(Math.abs(x-z) === Math.abs(y-z)){
        return 'Mouse C'
    }else if(Math.abs(x-z) < Math.abs(y-z)){
        return 'Cat A'
    }else {
        return 'Cat B'
    }
}

console.log(catAndMouse(2,5,4))