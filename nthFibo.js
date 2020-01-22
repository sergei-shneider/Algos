function nthFibo(n, memo = {2:1, 3:1}) {
  if(n<=1) return 0
  
  if(!memo[n]){
    memo[n] = nthFibo(n-1, memo)+nthFibo(n-2, memo)
  }
  return memo[n]
}
nthFibo(25)