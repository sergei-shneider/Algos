# Uses python3
def calc_fib(n):
  if n<0:
      return -1
  fibarray = [0,1]
  if n<2:
      return fibarray[n]
  n=n+1
  count = 2
  while count<n:
      fibarray.append(fibarray[count-2]+fibarray[count-1])
      count+=1
  return fibarray[-1]
n = int(input())
print(calc_fib(n))
