function findRotatedIndex(arrIn, numIn){
  let start = 0;
  let end = arrIn.length-1;
  let mid = Math.ceil((end-start)/2);
  while(start<end){
    
    mid = start+Math.ceil((end-start)/2)
    console.log(start, end, mid)
    if(arrIn[mid]===numIn) return mid;
    else if(arrIn[mid]>numIn){
        if(arrIn[0]>numIn) start = mid+1;
        else{
            end = mid-1;
        }
    }
    else if(arrIn[mid]<numIn){
        if(arrIn[arrIn.length-1]<numIn) end = mid-1;
        else{
            start= mid+1
        }
    }
  }
  return -1
}

console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 3))

3,4,1,2

6,7,8,9,1,2,3,4
37,44,66,102,10,22
6,7,8,9,1,2,3,4
11,12,13,14,15,16,3,5,7,9