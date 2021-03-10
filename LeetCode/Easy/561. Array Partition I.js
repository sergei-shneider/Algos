var arrayPairSum = function(nums) {
    if(!nums.length || nums.length<2) return 0
    nums.sort((a, b)=>a-b)
    let sum = 0
    for(let i = 0; i<nums.length-1; i+=2){
        sum+=nums[i]
    }
    return sum
};
