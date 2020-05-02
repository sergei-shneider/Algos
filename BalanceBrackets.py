def balance_check(s):
    open = '[{('
    dict = {']':'[', '}':'{', ')':'('}
    stack = []
    i = 1
    for bracket in s:
        
        if bracket in open:
            i = 1
            stack.append(bracket)
        if bracket not in open:
            print(bracket, stack[-i])
            if dict[bracket] != stack[-i]:
                return False
            else:
                i+=1
    return True if i!=1 else False
    
def balance_check(s):
    
    # Check is even number of brackets
    if len(s)%2 != 0:
        return False
    
    # Set of opening brackets
    opening = set('([{') 
    
    # Matching Pairs
    matches = set([ ('(',')'), ('[',']'), ('{','}') ]) 
    
    # Use a list as a "Stack"
    stack = []
    
    # Check every parenthesis in string
    for paren in s:
        
        # If its an opening, append it to list
        if paren in opening:
            stack.append(paren)
        
        else:
            
            # Check that there are parentheses in Stack
            if len(stack) == 0:
                return False
            
            # Check the last open parenthesis
            last_open = stack.pop()
            
            # Check if it has a closing match
            if (last_open,paren) not in matches:
                return False
            
    return len(stack) == 0