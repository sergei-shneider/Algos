var canFormArray = function(arr, pieces) {
    let out = new Array(arr.length)
    for(let i = 0; i<pieces.length; i++){
        let currIdx = arr.indexOf(pieces[i][0])
        if(currIdx === -1) return false
        else{
            out[currIdx] = pieces[i]
        }
    }
    let newOut = []
    for(let i = 0; i<out.length; i++){
        if(out[i]) newOut.push(...out[i])
        if(newOut[newOut.length-1]!==arr[newOut.length-1]) return false
    }
    for(let i = 0; i<newOut.length; i++){
        if(newOut[i]!==arr[i]) return false
    }
    return true
};
