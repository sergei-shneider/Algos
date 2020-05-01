class T:
    def __init__(self,value,left=None,right=None):
        self.value=value
        self.left=left
        self.right=right


def is_bst(node, count = 0, nodelist = []):
    if count == 0:
        nodelist = []
    count+=1
    
    if node is None:
       return True
    if node.left:
        is_bst(node.left, count, nodelist)
    nodelist.append(node.value)
    if node.right!=None:
        is_bst(node.right, count, nodelist)
    checklist = nodelist[:].copy()
    
    checklist.sort()
    revcheck = checklist.copy()
    revcheck.reverse()
    #print(nodelist, checklist, revcheck)
    returnV = nodelist[:]==checklist or nodelist[:]==revcheck