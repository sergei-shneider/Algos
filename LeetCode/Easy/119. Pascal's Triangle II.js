var getRow = function(rowIndex) {
    let outArr = new Array(rowIndex+1).fill(1)
    let newValue = 0
    outArr[1] = rowIndex
    outArr[rowIndex-1] = rowIndex
    let multiplier = 1
    if(rowIndex%2!==0) multiplier = Math.floor(rowIndex/2)
    for(let i = 2; i<Math.ceil(rowIndex/2); i++){
        newValue = rowIndex*multiplier
        outArr[i] = newValue
        outArr[rowIndex-i] = newValue
    }
    return outArr
};
