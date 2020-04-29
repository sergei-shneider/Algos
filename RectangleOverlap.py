def rectOverlap(r1, r2):
    if r1['x']>r2['x']:
        low=r2
        high=r1
    else:
        low=r1
        high=r2
    if low['x']+low['w']<high['x']:
        return False
    else:
        if low['y']>high['y']+high['h']:
            return False
        elif low['y']+low['h']>high['y']:
            return True
    return False



    def calc_overlap(coor1,dim1,coor2,dim2):
    """
    Takes in 2 coordinates and their length in that dimension
    """
    
    # Find greater of the two coordinates
    # (this is either the point to the most right
    #  or the higher point, depending on the dimension)
    
    # The greater point would be the start of the overlap
    greater = max(coor1,coor2)
    
    # The lower point is the end of the overlap
    lower = min(coor1+dim1,coor2+dim2)
    
    # Return a tuple of Nones if there is no overlap
    
    if greater >= lower:
        return (None,None)
    
    # Otherwise, get the overlap length
    overlap = lower-greater
    
    return (greater,overlap)


    def calc_rect_overlap(r1,r2):
    
    
    x_overlap, w_overlap = calc_overlap(r1['x'],r1['w'],r2['x'],r2['w'])
    
    y_overlap, h_overlap = calc_overlap(r1['y'],r1['h'],r2['y'],r2['h'])
    
    # If either returned None tuples, then there is no overlap!
    if not w_overlap or not h_overlap:
        print 'There was no overlap!'
        return None
    
    # Otherwise return the dictionary format of the overlapping rectangle
    return { 'x':x_overlap,'y': y_overlap,'w':w_overlap,'h':h_overlap}