def pair_sum(arr,k):
    dict = {}
    returnArr = []
    for num in arr:
        if num not in dict:
            dict[num]=1
            tocheck = k-num
            if tocheck in dict:
                returnArr.append((tocheck, num))
    return len(returnArr)



def pair_sum(arr,k):
    
    if len(arr)<2:
        return
    
    # Sets for tracking
    seen = set()
    output = set()
    
    # For every number in array
    for num in arr:
        
        # Set target difference
        target = k-num
        
        # Add it to set if target hasn't been seen
        if target not in seen:
            seen.add(num)
        
        else:
            # Add a tuple with the corresponding pair
            output.add( (min(num,target),  max(num,target)) )
    
    
    # FOR TESTING
    return len(output)
