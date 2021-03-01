var findDuplicates = function(nums) {
    //return nums.filter((x, idx)=>nums.indexOf(x)!==idx)
    //console.log(nums.length)
    //let numSet = new Set(nums)
    //console.log(numSet)
    let output = []
    nums = nums.sort()
    for(let i = 1; i<nums.length; i++){
        if(nums[i]===nums[i-1]){
            output.push(nums[i])
            i++
        }
    }
    return output
    // let idx = 0
    // for(let i = nums.length-1; i>0; i--){
    //     idx = nums.indexOf(nums[i])
    //     if(idx!==i) output.push(nums[idx])
    // }
    // return output
};
