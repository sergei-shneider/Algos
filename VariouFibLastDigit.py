def fibonacci_sum_naive(n):
    modTen = [0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1]
    sumPisano = sum(modTen)
    lenPisano = len(modTen)
    toMod = n%lenPisano
    outputSum = n//lenPisano*sumPisano
    return (outputSum+sum(modTen[:toMod+1]))%10

# print(fibonacci_sum_naive(100))
# print(fibonacci_sum_naive(2))

# print(sum([1,2,3]))


def fibonacci_partial_sum_naive(m, n):
  modTen = [0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1]
  sumPisano = sum(modTen)
  lenPisano = len(modTen)
  lowerCutoff = m%lenPisano
  toMod = n%lenPisano
  outputSum = n//lenPisano*sumPisano
  return (outputSum+sum(modTen[:toMod+1])-sum(modTen[:lowerCutoff]))%10



#print(fibonacci_partial_sum_naive(10,200))


def fibonacci_sum_squares_naive(n):
    modTen = [0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1]
    modTen = [i**2%10 for i in modTen]
    sumPisano = sum(modTen)
    lenPisano = len(modTen)
    toMod = n%lenPisano
    outputSum = n//lenPisano*sumPisano
    return (outputSum+sum(modTen[:toMod+1]))%10
  


print(fibonacci_sum_squares_naive(1234567890))