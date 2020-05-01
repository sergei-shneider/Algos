def sort_max(arrIn, maxi):
  
  #print(radArr)
  maxLen = 0
  while maxi>2:
    maxi/=10
    maxLen+=1
  #print(maxLen)
  minLen=1
  while minLen<=maxLen:
    
    #print((25%(10**minLen))//10**(minLen-1), 10**(minLen-1))
    radArr = []
    i = 0
    while i<10:
      radArr.append([])
      i+=1
    for num in arrIn:
      #print(num)
      #print(num%(10*minLen))
      radArr[(num%(10**minLen))//10**(minLen-1)].append(num)
    print('r', radArr)
    arrIn = []
    for ele in radArr:
      #print(ele)
      arrIn=arrIn+ele
      #print(newArr)
    print('n', arrIn)
    minLen+=1
  return arrIn

a = [25, 1345, 1497, 1586, 1915, 2462, 4, 44, 255, 217, 30, 555, 10, 3130, 3434, 4348, 4366, 4761, 6056, 7106, 7779, 7985, 8550]
  
print(sort_max(a, 9999))

def solution(unsorted_prices,max_price):
    
    # list of 0s at indices 0 to max_price
    prices_to_counts = [0]* (max_price+1)
    
    # populate prices
    for price in unsorted_prices:
        prices_to_counts[price] +=1
        
    # populate final sorted prices
    sorted_prices = []
    
    # For each price in prices_to_counts
    for price,count in enumerate(prices_to_counts):
        
        # for the number of times the element occurs
        for time in range(count):
            
            # add it to the sorted price list
            sorted_prices.append(price)
            