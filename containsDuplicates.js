let nums = [1,2,3,3];

// nested loop approach

let flag = false;
for(let i=0; i<nums.length; i++){
    let a = nums[i];
    for(let j=i+1; j<nums.length; j++){
        if(a === nums[j]){
            flag = true;
            break
        }
    }
}

console.log(flag)

// with set function

let ary = new Set(nums)
console.log(ary.size !== nums.length)

// with hashmap

let mp = new Map()
for(let i=0; i<nums.length; i++){
    if(mp.has(nums[i])){
        mp.set(nums[i], mp.get(nums[i]) + 1)
    }else{
        mp.set(nums[i], 1)
    }
}
let res = false;
for(let val of mp.keys()){
    if(mp.get(val) > 1){
       res = true
       break 
    }
}

console.log(res)