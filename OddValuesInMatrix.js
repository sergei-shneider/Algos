
var oddCells = function(n, m, indices) {
    let outArr = []
    while(n>0){
        let newArr = [];
        let t = m;
        while(t>0){
            newArr.push(0);
            t--;
        }
        outArr.push(newArr);
        n--;
    }
    let count = 0
    for(let i = 0; i<indices.length; i++){
        let row = indices[i][0];
        let col = indices[i][1];
        for(let j = 0; j<outArr[row].length; j++){
            outArr[row][j]+=1;
             if(outArr[row][j]%2!==0){
                 count++;
             } else{
                 count--;
             }
        }
        for(let k = 0; k<outArr.length; k++){
            outArr[k][col]+=1;
        
                if (outArr[k][col]%2!==0) {
                count++;
                 }
                else{
                count--;
                }
            
        }
    }
    return count;
};
