function digitCount(num) {
  return num.toString().length
}

function mostDigits(nums) {
  let max = 0;
  nums.forEach(function(x){
      if(digitCount(x)>max) max = digitCount(x)
  })
  return max
}


function RadixSort(arrIn){
  let buckets = [[],[],[],[],[],[],[],[],[],[]]
  let remainder = 10;
  let divider = 1;
  let on = mostDigits(arrIn)
  console.log(arrIn)
  let j=0;
  while(j<on){
    buckets = [[],[],[],[],[],[],[],[],[],[]]
    for(let i = 0; i<arrIn.length; i++){
      let lastDigit = (Math.floor(arrIn[i]/divider))%remainder; 
      //console.log(arrIn[i], divider, remainder)
      console.log(lastDigit, arrIn[i], i)
      // console.log(buckets)
      // console.log(buckets[lastDigit])
      buckets[lastDigit].push(arrIn[i])
    }
    console.log(buckets)
    arrIn=[]
    for(let i = 0; i<buckets.length; i++){
      arrIn = arrIn.concat(buckets[i])
    }
    //console.log(buckets)
    // if (buckets[0].length===arrIn.length) on = false;
    divider*=10;
    j++
    //console.log(arrIn)
  }
  return arrIn;
}

//RadixSort([1, 555, 33, 55, 99, 77, 33, 275, 4543])
RadixSort([10, 100, 1, 1000, 10000000])
//COLTS SOLUTION BELOW
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

//radixSort([-20, 23,345,5467,12,2345,9852])








