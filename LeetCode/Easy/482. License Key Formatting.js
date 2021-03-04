var licenseKeyFormatting = function(S, K) {
    let SArr = S.split("-")
  
    let output = []
    let count = 0
    for(let i = S.length-1; i>=0; i--){
        if(S[i]==='-') continue
        output.push(S[i].toUpperCase())
        count++
        if(count===K && i!==0){
            output.push('-')
            count = 0
        }
    }
    let outStr=""
   
    for(let i = output.length-1; i>=0; i--){
        if(i===output.length-1 && output[i]==='-') continue
        outStr+=output[i]
    }
    return outStr
    
};
