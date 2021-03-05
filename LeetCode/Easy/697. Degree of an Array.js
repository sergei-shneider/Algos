var findShortestSubArray = function(nums) {
    if(!nums) return 0
    if(nums.length === 1) return 1
    let maxFreq = freq(nums)
   // console.log(maxFreq)
    let dict = {}
    let start = 0
    let minLen = Infinity
    for(let i = 0; i<nums.length; i++){
        if(dict[nums[i]]) dict[nums[i]]++
        else{
            dict[nums[i]] = 1
        }
      // console.log(dict)
        let currVal = dict[nums[i]]
        if(currVal===maxFreq){

            if((i+1-start)===maxFreq) return maxFreq
            if((i+1-start)<minLen) minLen = i+1-start
            while(currVal===maxFreq){
                if(nums[start]!==nums[i] && (i-start)<minLen) minLen = i-start
                else if(nums[start] === nums[i]) currVal --
                dict[nums[start]]--
                if(dict[nums[start]] === 0){
                    delete dict[nums[start]]
                }
                start++   
            }
        }
    }
    return minLen
};

const freq = (nums) =>{
    const dict = {}
    for(let i = 0; i<nums.length; i++){
        if(dict[nums[i]]) dict[nums[i]]++
        else dict[nums[i]] = 1
    }
    return Math.max(...Object.values(dict))
}
