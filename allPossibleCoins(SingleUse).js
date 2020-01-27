 let mem = {}
function minCoinChange(coins, amount, mem) {
 
    return rec(coins, amount, coins.length-1, mem)
}
function rec(arr, total, i, mem){
  console.log(arr[i], i, mem)
    let key = total+':'+i
    if (key in mem) {
      console.log(key, mem)
      return mem[key]
    }
    if(total===0) return 1;
    else if (total<0 || i<0) return 0;
    else if(total<arr[i]){
      toreturn = rec(arr, total, i-1, mem)
    }
    else{
    toreturn = rec(arr, total - arr[i], i-1, mem) + rec(arr, total, i-1, mem)
    }
    mem[key] = toreturn
    //console.log(mem)
    return toreturn
}
console.log(mem)
minCoinChange([1, 2, 3, 4, 5, 6], 6, mem)