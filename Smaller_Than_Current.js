var smallerNumbersThanCurrent = function(nums) {
    let sortedNums = [...nums];
    sortedNums.sort((a,b)=>a-b);
    return nums.map(x => sortedNums.indexOf(x));
};
