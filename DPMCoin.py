def get_change(m):
    coins = [4, 3, 1]
    coinArray = [0]*(m+1)
    i = 1
    while i<=m:
      temp = float("inf")
      for coin in coins:
        if i-coin>=0:
           if temp>coinArray[i-coin]+1:
             temp = coinArray[i-coin]+1
             coinArray[i]=coinArray[i-coin]+1
      i+=1
    return coinArray[-1]

        

print(get_change(34))