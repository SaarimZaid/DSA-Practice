var removeDuplicateLetters = function(s) {
    let mp = new Map();
    let ar = new Map();
    let str = '';
    for(let i=0;i<s.length;i++){
        if(mp.has(s[i])){
            mp.set(s[i], mp.get(s[i])+1)
        }else{
            mp.set(s[i], 1);
            ar.set(s[i], false)
        }
    }
    for(let i=0; i<s.length; i++){
        
    }
    return ar
};

console.log(removeDuplicateLetters('cbabcd'))