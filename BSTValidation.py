class T:
    def __init__(self,value,left=None,right=None):
        self.value=value
        self.left=left
        self.right=right

def is_bst2(node):
    nodelist=[]
    
    if node.left:
        newval = is_bst2(node.left)
        if newval:
            nodelist = nodelist+newval
        else:
            return False
    if len(nodelist) and node.value<=nodelist[-1]:
        print('ey')
        return False
    nodelist.append(node.value)
    print(nodelist)
    if node.right!=None:
        newval = is_bst2(node.right)
        if newval:
            nodelist = nodelist+newval
        else:
            return False
    checklist = nodelist.copy()
    checklist.sort()
    
    return nodelist
    
def is_bst(node):
    if node is None:
       return True
    elif not node.left and not node.right:
       return True
    if is_bst2(node):
        return True
    return False
a=T(7, T(9), T(2))
print(a.left.value)
print(is_bst(T(7, T(9), T(2))))