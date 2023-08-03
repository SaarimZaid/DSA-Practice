function twoSum(nums, target){
    let map = new Map();
  
  for(let i=0;i<nums.length; i++){
      let compliment = target - nums[i];
      if(map.has(compliment)) {
        return [map.get(compliment), i]
      }
      map.set(nums[i], i)
  }
}
// let nums = [2,7,11,15]
// let target = 9
console.log(twoSum([1,2,3,4,7,9,10],10))