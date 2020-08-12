var shuffle = function(nums, n) {
    let newArr = [];
    if(nums.length%n!==0) return nums;
    if(nums.length<n) return nums;
    if(nums.length<2) return nums;
    for(let i = 0; i<n; i++){
        newArr.push(nums[i]);
        newArr.push(nums[i+n]);
    }

    return newArr;
};
