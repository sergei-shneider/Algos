var findNumbers = function(nums) {
    
    return nums.map(x => x.toString().length).filter(x => x%2==0).length
};
