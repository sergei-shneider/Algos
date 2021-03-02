var kWeakestRows = function(mat, k) {
    let strArr = new Array(mat.length)
    for(let i = 0; i<mat.length; i++){
        let val = mat[i].indexOf(0)
        if(val<0) val = mat[i].length
        strArr[i] = [val, i]
    }
    return strArr.sort((a, b) => a[0] - b[0] || a[1]-b[1]).map(x => x[1]).filter((x, idx)=>idx<k)
};
