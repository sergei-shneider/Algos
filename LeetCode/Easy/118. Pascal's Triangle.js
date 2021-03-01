var generate = function(numRows) {
    let outArr = [[1], [1, 1], [1, 2, 1]]
    if(numRows<4) return outArr.splice(0, numRows)
    let row = []
    for(let i = 3; i<numRows; i++){
        row = new Array(i+1).fill(1)
        for(let j = 1; j<=Math.ceil(i/2); j++){
            let insert = outArr[i-1][j-1]+outArr[i-1][j]
           // console.log(insert)
            row[j] = insert
            row[row.length-j-1] = insert
        }
        outArr.push(row)
    }
    return outArr
};
