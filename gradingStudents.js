function gradingStudents(grades) {
    let res = []
    for(let i=0; i<grades.length; i++){
        if(grades[i]<38){
            res.push(grades[i])
        }
        
        if(grades[i] >= 38){
            if(grades[i]%5 !== 0){
                let div = parseInt(grades[i]/5)
                let roundedVal = div*5 + 5
                if(roundedVal-grades[i] < 3){
                    res.push(roundedVal)
                }else{
                    res.push(grades[i])
                }
            }else{
                res.push(grades[i])
            }
        }
    }
    return res
}

let result = gradingStudents([84, 73, 12, 37, 59, 70])
console.log(result.join('\n'))