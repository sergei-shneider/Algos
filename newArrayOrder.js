var createTargetArray = function(nums, index) {
    let newArr=[];
    for(let i = 0; i<index.length; i++){
        newArr.splice(index[i], 0, nums[i])
    }
    return newArr;
};
