
class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None
        
class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None
        self.tail = None
        self.size = 0

    def get(self, index: int, source=0) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        if index<0 or index>=self.size:
            return -1
        current = self.head
        while index>0 and current.next:
            index-=1
            current=current.next
        if not source:
            return current.val
        else:
            return current
            

    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        if val==None:
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

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
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
            print('whatstart')
            print(self.tail.val)
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode 
            print('what', self.tail.val)
        self.size+=1
        return self.head

    def addAtIndex(self, index: int, val: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
        """
        newNode = Node(val)
        print('size', self.size)
        print('inputs', index, val)
        if index == 0 and self.size == 0:
            self.head = newNode
            self.tail = newNode
            self.size+=1
            return
        if self.size == 1:
            if index == 0:
                self.head = newNode
                newNode.next = self.tail
                self.tail.prev = newNode
            elif index == 1:
                self.tail = newNode
                newNode.prev = self.head
                self.head.next = newNode
            else: 
                return -1
            self.size+=1
            return
        if index>self.size:
           return -1
        elif index == self.size:
            newNode.prev = self.tail
            self.tail.next = newNode
            self.tail = newNode
            self.size+=1
            return
        prevNode = self.get(index, 1)
        print(prevNode.val)
        prevNode.prev.next = newNode
        newNode.prev = prevNode.prev
        prevNode.prev = newNode
        newNode.next = prevNode
        self.size+=1

    def deleteAtIndex(self, index: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        if index<0 or index>self.size-1:
            
            return -1
        if index == 0:
            if self.size == 1:
                self.head = None
                self.tail = None
            else:
                temp = self.head
                self.head = self.head.next
                self.head.prev = None
                temp.next = None
            self.size-=1
            return
        if index == self.size-1:
            temp = self.tail
            self.tail = self.tail.prev
            self.tail.next = None
            temp.prev = None
            self.size-=1
            return
        prevNode = self.get(index, 1)
        prevNode.prev.next = prevNode.next
        prevNode.next.prev = prevNode.prev
        prevNode.next = None
        prevNode.prev = None
        self.size-=1
    def print(self):
      current = self.head
      while current:
        print(current.val)
        current = current.next

MLL = MyLinkedList()
aah = MLL.addAtHead
aai = MLL.addAtIndex
dai = MLL.deleteAtIndex
aat = MLL.addAtTail
aai(0, 10)
MLL.print()
aai(0, 20)
aai(1, 30)
print(MLL.get(0))
##MLL.print()
#print(MLL.get(0))
# MLL.addAtHead(7)
# MLL.addAtHead(2)
# MLL.addAtHead(1)
# print('size', MLL.size)
# MLL.addAtIndex(3, 0)
# print('print')
# MLL.print()
# MLL.deleteAtIndex(2)
# MLL.addAtHead(6)
# MLL.addAtTail(4)
# print('print')
# MLL.print()
# print('get', MLL.get(4))


# MLL.addAtHead(4)
# MLL.addAtIndex(5, 0)
# MLL.addAtHead(6)
# aah(1)
# aat(3)
# MLL.print()

# aai(1, 2)
# dai(1)

["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
[[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[1],[1]]
["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
[[],[0,10],[0,20],[1,30],[0]]