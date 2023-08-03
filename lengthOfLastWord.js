var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    // console.log(arr)
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] === '' || arr[i] === undefined){
            continue;
        }else{
            // console.log(arr[i])
            return arr[i].length
        }
    }
};

console.log(lengthOfLastWord("luffy is still joyboy"))