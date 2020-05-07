
def reverse(head, nextIn=None):
    if not head:
        return None
    newNode = Node(head.data)
    newNode.next = nextIn
    print(head.data)
    if nextIn: print('nextin', nextIn.data)
    if not head.next:
        return newNode
    return reverse(head.next, nextIn=newNode)
    

class Node(object):
    def __init__(self, data=None):
        self.data = data
        self.next = None


a = Node(1)
b = Node(8)
c = Node(9)
a.next=b
b.next=c

d=reverse(a)

#print(a.data)
#print(b.data)
#print(c.data)

print(1, d.data)
print(2, d.next.data)
print(3, d.next.next.data)