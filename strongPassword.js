function minimumNumber(n, password) {
    // let numbers = /[0123456789]/
    // let lower_case = /[abcdefghijklmnopqrstuvwxyz]/
    // let upper_case = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/
    // let special_characters = /[!@#$%^&*()-+]/
    
    // let ar = [false,false,false,false]
    
    // if(n < 6){
    //     return 6-n;
    // }else{
    //     ar[0] = numbers.test(password);
    //     ar[1] = lower_case.test(password);
    //     ar[2] = upper_case.test(password);
    //     ar[3] = special_characters.test(password);

    //     if(ar[0]===true && ar[1]===true && ar[2]===true && ar[3]===true){
    //         return 0
    //     }else{
    //         let count = 0;
    //         for(let i=0;i<ar.length;i++){
    //             if(ar[i] !== true) count++
    //         }
    //         return count;
    //     }
    // }
    
    let numbers = /[0123456789]/
    let lower_case = /[abcdefghijklmnopqrstuvwxyz]/
    let upper_case = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/
    let special_characters = /[!@#$%^&*()-+]/
    
    let count = 0;
    
    if(!numbers.test(password)){
        count++;
    }
    if(!lower_case.test(password)){
        count++;
    }
    if(!upper_case.test(password)){
        count++;
    }
    if(!special_characters.test(password)){
        count++;
    }    
    if(password.length < 6 && (6-password.length) > count){
        return 6-n;
    }
    return count;
}
console.log(minimumNumber(3, 'Ad1'))

// console.log('for special Characters-->', '%'.charCodeAt(0),'-', '^'.charCodeAt(0))