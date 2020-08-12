var decompressRLElist = function(nums) {
    let newArr = [];
    for(let i = 0; i<nums.length; i+=2){
        let count = nums[i];
        while(count>0){
            newArr.push(nums[i+1]);
            count--;
        }
    }
    return newArr;
};
