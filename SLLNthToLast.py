def nth_to_last_node(n, head):
    count = 0
    current = head
    while current.nextnode:
        current = current.nextnode
        count+=1
    current = head
    n = count-n
    while n>-1:
        current=current.nextnode
        n-=1
    return current



def nth_to_last_node(n, head):

    left_pointer  = head
    right_pointer = head

    # Set right pointer at n nodes away from head
    for i in xrange(n-1):
        
        # Check for edge case of not having enough nodes!
        if not right_pointer.nextnode:
            raise LookupError('Error: n is larger than the linked list.')

        # Otherwise, we can set the block
        right_pointer = right_pointer.nextnode

    # Move the block down the linked list
    while right_pointer.nextnode:
        left_pointer  = left_pointer.nextnode
        right_pointer = right_pointer.nextnode

    # Now return left pointer, its at the nth to last element!
    return left_pointer

    