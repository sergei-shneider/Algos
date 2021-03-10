var fairCandySwap = function(A, B) {
    const Btotal = B.reduce((a,b)=>a+b, 0)
    const Atotal = A.reduce((a,b)=>a+b, 0)
    let max
    let min
    Btotal>Atotal ? max = B : max = A
    Btotal>Atotal ? min = A : min = B
    const diff = Math.ceil(Math.abs(Btotal-Atotal)/2)
    const out = [0, 0]
    for(let i = 0; i<max.length; i++){
        let toFind = max[i]-diff
        let idx = min.indexOf(toFind)
        if(idx!==-1){
            if((A[i]-diff===B[idx])){
                out[0] = A[i]
                out[1] = B[idx]
            }else{
                out[0] = A[idx]
                out[1] = B[i]
            }

            return out
        }
    }
};
