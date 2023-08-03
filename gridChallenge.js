function gridChallenge(grid) {
    let sortedGrid = []
    for(let i=0; i<grid.length; i++){
        sortedGrid.push(grid[i].split('').sort().join(''))
    }
    console.log('row sorted:',sortedGrid)

    let colGrid = [];
    let flag = 'YES';
    for(let i=0; i<grid[0].length; i++){
        let str = ''
        for(let j=0; j<grid.length; j++){
            str += sortedGrid[j][i];
        }
        colGrid.push(str)
    }
    console.log('col grid:',colGrid);

    for(let i=0; i<colGrid.length; i++){
        let colSorted = colGrid[i].split('').sort().join('')
        console.log(colSorted, colGrid[i])
        if(colSorted === colGrid[i]){
            continue;
        }else{
            flag = 'No';
            break;
        }
    }
    return flag;
}

console.log(gridChallenge([ 'mpxz', 'abcd', 'wlmf' ]))