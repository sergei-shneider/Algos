function QuickSort(arrIn, compIn){
  if(arrIn.length<=1) return arrIn
  let count = 1;
  let center = Math.round(arrIn.length/2);
  let j=1;
  let k=1;
  let temp = arrIn[center];
  arrIn[center]=arrIn[0]
  arrIn[0]=temp;
  for(let i = 0; i<arrIn.length; i++){
     let compare;
    if(compIn){
        compare = compIn(arrIn[0], arrIn[i])>0
    }
    else compare = arrIn[i]<arrIn[0]
    if(compare){
      let temp=arrIn[count]
      arrIn[count]=arrIn[i]
      arrIn[i]=temp;
      count++
    }

  }
temp = arrIn[0];
arrIn[0]=arrIn[count-1];
arrIn[count-1]=temp;

return quickSort(arrIn.slice(0,count-1), compIn).concat(arrIn[count-1]).concat(quickSort(arrIn.slice(count,arrIn.length), compIn))
}


QuickSort([1, 500, 25, 33, 15, 25, 355, 45, 20, 11, 3])

//


function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
