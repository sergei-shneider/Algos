function InsertionSort(arrIn){
  for (let i = 0; i<arrIn.length-1; i++){
    if(arrIn[i+1]<arrIn[i]){
      let j = i;
      while(arrIn[j+1]<arrIn[j]){
        
        let temp = arrIn[j]
        arrIn[j]=arrIn[j+1]
        arrIn[j+1]=temp
       j--
      }
    }
  }
  return arrIn
}
InsertionSort( [5, 15, 3, 2, 55, 4])


function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])