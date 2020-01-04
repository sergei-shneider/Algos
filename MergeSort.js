// Merge function from earlier
function merge(arr1, arr2, comp){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        let check = arr1[i]<arr2[j]
        if(comp) check = comp(arr1[i],arr2[j])<0
        if(check){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])


// The one from fullstack
function split(wholeArray){
  let alength = wholeArray.length
  let firstHalf =[]
  firstHalf = wholeArray.splice(0, Math.ceil(alength/2))
  return [firstHalf, wholeArray]
}

function merge(arrOne, arrTwo){

  let sortedArr = [];
  const tocheck = arrOne.length+arrTwo.length
  while(sortedArr.length<tocheck){
    if((typeof arrOne[0]==='undefined') || arrOne[0]>arrTwo[0]){
      sortedArr.push(arrTwo[0])
      arrTwo.splice(0,1)
    }
    else{
      sortedArr.push(arrOne[0])
      arrOne.splice(0,1)
    }

  }
  return sortedArr
}

function mergeSort(array){
  let output = []
  if (array.length ===1){
    output = output.concat(array)
  }
  else{
  let arrtoMerge = split(array)
  let left  = mergeSort(arrtoMerge[0])
  let right = mergeSort(arrtoMerge[1])
  output = output.concat(merge(left,right))
  }
  return output
}
                   