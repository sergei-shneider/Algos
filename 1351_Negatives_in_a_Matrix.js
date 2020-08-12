var countNegatives = function(grid) {
    let negatives = 0;
    let limit = grid[0].length
    for (let i = 0; i<grid.length; i++){
        let row = grid[i]
        let rLen = limit; 
        for(let j = 0; j<rLen; j++){
            if(row[j]<0){
                let toAdd = (rLen-j)
                negatives+=toAdd;
                negatives+=(toAdd*(grid.length-i-1));
                limit = j;
                break;
            }
        }
    }
    return negatives
};
