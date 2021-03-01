var isMonotonic = function(A) {
    if(!A) return false
    if(!A.length || A.length===1) return true
    let incOrDec = 0
    for(let i = 1; i<A.length; i++){
        if(A[i]===A[i-1]) continue
        if(!incOrDec) incOrDec = A[i]-A[i-1]
        else{
            if(incOrDec*(A[i]-A[i-1])<0) return false
        }
    }
    return true
    
};
