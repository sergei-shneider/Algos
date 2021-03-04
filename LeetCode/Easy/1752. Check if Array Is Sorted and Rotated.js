var check = function(nums) {
    let flips = 0
    let match = false
    for(let i = 1; i<nums.length; i++){
        if(nums[i]<nums[i-1]){
            flips++
            if(nums[0]<nums[nums.length-1]) return false
        }
    }
    return flips <= 1
};
