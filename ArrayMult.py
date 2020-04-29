def multiplication(arr):
    countArr = []
    for num in arr:
        count = 1
        for numIn in arr:
            if num==numIn:
                continue
            else:
                count*=numIn
        countArr.append(count)
    return countArr

def index_prod(lst):
    
    # Create an empty output list
    output = [None] * len(lst)
    
    # Set initial product and index for greedy run forward
    product = 1
    i = 0
    
    while i < len(lst):
        
        # Set index as cumulative product
        output[i] = product
        
        # Cumulative product
        product *= lst[i]
        
        # Move forward
        i +=1
        
    
    # Now for our Greedy run Backwards
    product = 1
    
    # Start index at last (taking into account index 0)
    i = len(lst) - 1
    
    # Until the beginning of the list
    while i >=0:
        # Same operations as before, just backwards
        output[i] *= product
        product *= lst[i]
        i -= 1
        
    return output    