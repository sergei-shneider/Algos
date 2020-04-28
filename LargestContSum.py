def large_cont_sum(arr): 
    print(arr)
    n_inf = float("-inf")
    if len(arr) == 0:
        return n_inf
    elif len(arr) == 1:
        return arr[0]
    currentsum = arr[0]
    largestsum = n_inf
    n_inf = float("-inf")
    arrOfPossibles = [currentsum]
    for i in range(1, len(arr)):
        currentsum=currentsum+arr[i]
        if currentsum>largestsum and currentsum>0:
            largestsum=currentsum
        else:
            arrOfPossibles.append(largestsum)
            arrOfPossibles.append(large_cont_sum(arr[i:]))
    print(arrOfPossibles)
    if len(arrOfPossibles):
        return max(arrOfPossibles)
    else:
        return n_inf
        


def large_cont_sum(arr): 
    
    # Check to see if array is length 0
    if len(arr)==0: 
        return 0
    
    # Start the max and current sum at the first element
    max_sum=current_sum=arr[0] 
    
    # For every element in array
    for num in arr[1:]: 
        
        # Set current sum as the higher of the two
        current_sum=max(current_sum+num, num)
        
        # Set max as the higher between the currentSum and the current max
        max_sum=max(current_sum, max_sum) 
        
    return max_sum 