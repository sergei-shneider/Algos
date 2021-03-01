var maxScore = function(s) {
    let output = new Array(s.length).fill(0)
    let left = 0
    let right = 0

    for(let i = 0; i<s.length; i++){
        left+=!parseInt(s[i])
        right+=parseInt(s[s.length-1-i])
        output[i]+=left
        output[s.length-i-1]+=right
    }
    if(s.length===2) return (s[0]==="0")+(s[1]==="1")
    let max = 0
    for(let i = 1; i<output.length-1; i++){
        if(output[i]>max) max = output[i]
    }
    return max
};
