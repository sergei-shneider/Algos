
class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None


class DoublyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    def push(self, val):
        print(1)
        if val == None:
            raise ValueError()
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        elif self.head == self.tail:
            self.head.next = newNode
            newNode.prev = self.head
            self.tail = newNode
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode 
        self.size+=1
        return self.head
    def pop(self):
        print(2)
        if not self.head:
            raise ValueError()
        self.size-=1
        if self.head==self.tail:
            print(5)
            temp = self.head
            self.head = None
            self.tail = None
            return temp.val
        else:
            print(6)
            temp = self.tail
            self.tail = self.tail.prev
            temp.prev = None
            self.tail.next = None
            return temp.val
    def shift(self):
        print(3)
        #print(self.tail.val)
        if not self.head:
            raise ValueError()
        self.size-=1
        if self.head==self.tail:
            
            temp = self.head
            self.head = None
            self.tail = None
            return temp.val
        else:
            temp = self.head
            self.head = self.head.next
            temp.next = None
            self.head.prev = None
            if self.head==self.tail:
                self.head.next = None
            return temp.val
    def unshift(self, val):
        print(4)
        if not val:
            raise ValueError()
        self.size+=1
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        elif self.head==self.tail:
            self.tail.prev = newNode
            newNode.next = self.tail
            self.head.next = None
            self.head = newNode
        else:
            newNode.next=self.head
            self.head.prev = newNode
            self.head=newNode
    def print(self):
      current = self.head
      print('Printing list')
      while current:
        print(current.val)
        current = current.next
      
DLL = DoublyLinkedList()
DLL.push(100)
DLL.push(20)
DLL.pop()
DLL.push(30)
DLL.unshift(40)
DLL.push(50)
DLL.pop()


DLL.print()














#Hackerrank methods:
def reverse(head):
    current = head
    previous = None
    while current.next:
        temp = current.next
        current.next = previous
        current.prev = temp
        previous=current
        current=temp
    current.next = previous
    current.prev = None
    return current