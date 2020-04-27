def finder(arr1,arr2):
   arr1.sort()
   arr2.sort()
   for i in range(0, len(arr2)):
     if arr1[i]!=arr2[i]:
       return arr1[i]
   return arr1[-1]
arr1 = [1,2,3,4,5,6,7]
arr2 = [3,7,2,1,4,6]

print(finder(arr1,arr2))

def finder3(arr1, arr2): 
    result=0 
    
    # Perform an XOR between the numbers in the arrays
    for num in arr1+arr2: 
        result^=num 
        print result
        
    return result 

def finder(arr1,arr2):
    
    # Sort the arrays
    arr1.sort()
    arr2.sort()
    
    # Compare elements in the sorted arrays
    for num1, num2 in zip(arr1,arr2):
        if num1!= num2:
            return num1
    
    # Otherwise return last element
    return arr1[-1]


import collections

def finder2(arr1, arr2): 
    
    # Using default dict to avoid key errors
    d=collections.defaultdict(int) 
    
    # Add a count for every instance in Array 1
    for num in arr2:
        d[num]+=1 
    
    # Check if num not in dictionary
    for num in arr1: 
        if d[num]==0: 
            return num 
        
        # Otherwise, subtract a count
        else: d[num]-=1 

#arrays can also be summed and substracted for the missing number