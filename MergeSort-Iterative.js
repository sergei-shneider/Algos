/**
* Merge sort an array of integers in increasing order.
*
* Iterative approach.
*/
let ops = 0;  // for performance evaluation only

function mergeSort (array) {
  // break array into individual arrays of single integers
  let result = array.map(num => [num]);

  // keep merging until result contains a single array
  while (result.length > 1) {
    const oddNumbered = result.length % 2 !== 0;
    let temp = [];

    // iterate 2 subarrays at a time and merge into larger subarray
    for (let i = 0; i < result.length; i += 2) {
      let a = result[i];
      let b = result[i + 1];

      // pre-merge 3 subarrays into 2 if there are odd number of subarrays
      if (oddNumbered && i === (result.length - 3)) {
        b = merge(b, result[i + 2]);
        i++;
      }
      // accumulate intermediate result
      temp.push(merge(a, b));
    }
    // current level merged, update result
    result = temp;
  }
  return result[0];
}

function merge (arrA, arrB) {
  const merged = [];
  let j = 0;
  let k = 0;

  while (merged.length !== (arrA.length + arrB.length)) {
    ops++;
    if (arrB[k] === undefined || arrA[j] <= arrB[k]) {
      merged.push(arrA[j]);
      j++;
    } else if (arrA[j] === undefined || arrA[j] > arrB[k]) {
      merged.push(arrB[k]);
      k++;
    }
  }
  return merged;
}

console.log(mergeSort([3, 4, 7, 9, 10, 1, 2, 1]));  // even n
console.log(mergeSort([3, 4, 7, 9, 10, 1, 2, 1, 13]));  // odd n

console.log(ops);
                   