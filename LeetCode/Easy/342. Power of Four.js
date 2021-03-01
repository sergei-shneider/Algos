var isPowerOfFour = function(n) {
    if(n===1) return true
    let i = 4
    while(i<n){
        i*=4
    }
    return i===n ? true : false
};
