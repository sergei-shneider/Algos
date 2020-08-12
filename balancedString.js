var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let total = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i]=='L') lCount++;
        else rCount++;
        if(lCount===rCount){
            total++;
            lCount = 0;
            rCount = 0;
        }
    }
    return total;
};
