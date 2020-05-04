def reverse(head):
    current = head
    previous = None
    #print(current.value)
    #print(current.nextnode)
    #print(current.nextnode.value)
    while current.nextnode:
        #print(current.value)
        #print(current.nextnode.value)
        temp = current.nextnode
        current.nextnode=previous
        previous = current
        current=temp
    current.nextnode=previous
    print(current.value, previous.value)

#checked on 
    def reverse(head):
    
    # Set up current,previous, and next nodes
    current = head
    previous = None
    nextnode = None

    # until we have gone through to the end of the list
    while current:
        
        # Make sure to copy the current nodes next node to a variable next_node
        # Before overwriting as the previous node for reversal
        nextnode = current.nextnode

        # Reverse the pointer ot the next_node
        current.nextnode = previous

        # Go one forward in the list
        previous = current
        current = nextnode

    return previous