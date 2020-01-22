function countZeroes(arrIn){
    let len = arrIn.length
    let start = Math.floor(len/2)
    let end = len;
    console.log(start, end)
    while(start<end){
      console.log(start, end)
        if(arrIn[start]===1){
            if(start===len-1) return 0;
            if(arrIn[start+1]===0){
                return len-start-1;
            }
            else{
                start=start+Math.ceil((end-start)/2)
            }
        }
        else if(arrIn[start]===0){
            if(start===0) return len
            if(arrIn[start-1]===1){
                return len-start;
            }
            else{
                end = start;
                start = Math.floor(end/2);
            }
        }
    }
    return 0;
}

countZeroes([0, 0, 0])

countZeroes([1, 1, 1, 1, 0, 0, 0])
//countZeroes([1, 0, 0, 0, 0, 0, 0])