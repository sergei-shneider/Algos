##UNIQUE ##
def posArr(total, arr, i):
    print(arr, total, i)
    if total == 0:
        print(1)
        return 1
    elif total<0 or i<0:
        print(2)
        return 0
    elif total<arr[i]:
        print(3)
        return posArr(total, arr, i-1)
    else:
        print('ey')
        return posArr(total-arr[i], arr, i-1) + posArr(total, arr, i-1)

def count_change(money, coins):
    # your implementation here
    lenArr = len(coins)-1
    #print(money, coins, lenArr)
    value = posArr(money, coins, lenArr)
    #print(value)
    return value
    

print(count_change(4, [2,2]))

##NON UNIQUE##

def solution(n, coins):
    
    # Set up our array for trakcing results
    arr = [1] + [0] * n
    
    for coin in coins:
        for i in range(coin, n + 1):
            arr[i] += arr[i - coin]
            
    if n == 0:
        return 0
    else:
        return arr[n]
    