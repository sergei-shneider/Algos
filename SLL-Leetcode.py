class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None
class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None
        self.tail = None
        self.len = 0

    def get(self, idx: int, source = 0) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        #print('hval', self.head.value, idx)
        #print(idx, self.len)
        current = self.head
        #print('start')
        #self.print()
        #print('end')
        if idx>=self.len:
            return -1
        elif idx==self.len:
             if source: 
                return self.tail
             return self.tail.value
        else:
            while idx>0:
                #print(current, current.value)
                current=current.next
                idx-=1
            #print(current, current.value)
        if source:
            #print(current.value)
            return current
        return current.value

    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        newNode = Node(val)
        self.len+=1
        #print(self.head, val)
        if self.head==None:
            self.head=newNode
            self.tail=newNode
            
        elif self.head==self.tail:
            self.head=newNode
            self.head.next=self.tail
        else:
            newNode.next=self.head
            self.head=newNode

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        newNode = Node(val)
        #print(newNode, newNode.value)
        self.len+=1
        if not self.head:
            self.head = newNode
            self.tail = newNode
        elif self.len==2:
            self.head.next=newNode
            self.tail=newNode
        else:
            self.tail.next = newNode
            self.tail = newNode

    def addAtIndex(self, idx: int, value: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
        """
        #print(self.len, idx)
        newNode = Node(value)
        if idx>self.len:
            return None
        elif self.len == 1:
            if idx==0:
              self.head = newNode
              self.head.next = self.tail
            elif idx==1:
              self.head.next = newNode
              self.tail = newNode
        elif idx==self.len:
            if idx:
              self.tail.next=newNode
              self.tail = newNode
            else:
              self.tail = newNode
              self.head = newNode
        elif idx==0:
            newNode.next=self.head
            self.head = newNode
        else:
            nextious = self.get(idx, 1)
            previous = self.get(idx-1, 1)
            #print('this', nextious.value, previous.value)
            previous.next = newNode
            newNode.next = nextious
        self.len+=1

    def deleteAtIndex(self, idx: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        # if(idx==3):
        #   print('here is magic')
        #   self.print()
        if idx>=self.len or idx<0:
            return 
        elif idx==0:
            if self.len==1:
                self.head = None
                self.tail = None
            else:
                temp = self.head
                self.head = self.head.next
                temp.next = None
        else:
            findNode = self.get(idx-1, 1)
            if idx == self.len-1:
              findNode.next = None
              self.tail = findNode
            else:
              temp = findNode.next
              findNode.next=temp.next
              temp.next=None 
        self.len-=1
        #return returnval
    def print(self):
      i=0
      current = self.head
      while current:
        print('Node# ', i, ' ', current.value)
        i+=1
        current = current.next

MLL = MyLinkedList()
aah = MLL.addAtHead
aai = MLL.addAtIndex
dai = MLL.deleteAtIndex
aat = MLL.addAtTail
get = MLL.get
#aah(1)
#aat(3)
#MLL.print()
#aai(1,2)
#MLL.print()
#get(1)
#MLL.print()
#dai(1)

#get(1)

# aai(0, 10)
# MLL.print()
# aai(0, 20)
# aai(1, 30)
# MLL.print()
# print(get(0))

# ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
# [[],[0,10],[0,20],[1,30],[0]]

# ["MyLinkedList","addAtHead","addAtIndex","addAtTail","addAtHead","addAtIndex","addAtTail","addAtTail","addAtIndex","deleteAtIndex","deleteAtIndex","addAtTail"]
# [[],[0],[1,4],[8],[5],[4,3],[0],[5],[6,3],[7],[5],[4]]
# aah(0)
# aai(1, 4)
# MLL.print()
# aat(8)
# aah(5)
# aai(4, 3)
# MLL.print()




# aah(4)
# print(get(1))

# listCom = ["addAtHead","addAtTail","deleteAtIndex","addAtTail","addAtIndex","addAtIndex","deleteAtIndex","deleteAtIndex","addAtTail","addAtIndex","addAtTail"]
# listVar = [[7],[0],[1],[5],[1,1],[2,6],[2],[1],[7],[1,7],[6]]

# aah(7)
# aat(0)
# dai(1)
# aat(5)
# print('ey')
# MLL.print()
# print('postey')
# aai(1,1)
# aai(2,6)
# dai(2)
# dai(1)
# aat(7)
# aai(1, 7)
# aat(6)
# aah(4)
# print('e', get(1))
# listCom = ["addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
# listVar = [[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
listCom = ["addAtHead","addAtTail","addAtTail","get","get","addAtTail","addAtIndex","addAtHead","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","get","addAtHead","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtHead","addAtIndex","addAtTail","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtTail","addAtTail","addAtHead","addAtTail","get","deleteAtIndex","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtTail","addAtHead","addAtIndex","addAtHead","addAtHead","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtHead","addAtTail","get","addAtHead","get","addAtTail","get","addAtTail","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","get","addAtHead","addAtIndex","addAtTail","get","addAtIndex","get","addAtIndex","get","addAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","addAtIndex","get","addAtHead","addAtTail","addAtTail","addAtHead","get","addAtTail","addAtHead","addAtTail","get","addAtIndex"]
listVar = [[84],[2],[39],[3],[1],[42],[1,80],[14],[1],[53],[98],[19],[12],[2],[16],[33],[4,17],[6,8],[37],[43],[11],[80],[31],[13,23],[17],[4],[10,0],[21],[73],[22],[24,37],[14],[97],[8],[6],[17],[50],[28],[76],[79],[18],[30],[5],[9],[83],[3],[40],[26],[20,90],[30],[40],[56],[15,23],[51],[21],[26],[83],[30],[12],[8],[4],[20],[45],[10],[56],[18],[33],[2],[70],[57],[31,24],[16,92],[40],[23],[26],[1],[92],[3,78],[42],[18],[39,9],[13],[33,17],[51],[18,95],[18,33],[80],[21],[7],[17,46],[33],[60],[26],[4],[9],[45],[38],[95],[78],[54],[42,86]]
for comm, var in zip(listCom, listVar):
  print(comm, var, MLL.len)
  try:
    if len(var)==2:
      eval('MLL.'+comm)(var[0], var[1])
    else:
      eval('MLL.'+comm)(var[0])
  except:
    get(var[0])
MLL.print()