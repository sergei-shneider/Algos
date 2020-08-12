var xorOperation = function(n, start) {
    if(n===1) return start;
    let result = ((start) ^ (start+2));
    let nums = [];
    for(let i=2; i<n; i++){
        nums.push(start+2*i)
        result = (result ^ (start+2*i))
    }
    console.log(nums)
    return result
};
