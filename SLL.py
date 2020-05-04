class Node(object):
  def __init__(self, value):
    self.value = value
    self.next = None

class SLL(object):
  def __init__(self):
    self.head = None
    self.tail = None
    self.len = 0
  def addNode(self, val):
    newNode = Node(val)
    self.len+=1
    if not self.head:
      self.head = newNode
    else:
      self.tail.next = newNode
      self.tail = newNode
  def pop(self):
    current = self.head
    if self.head == None:
      return None
    elif self.head==self.tail:
      toReturn = self.head
      self.head = None
      self.tail = None
      return toReturn
    while current.next.next:
      current = current.next
    value = current.next
    self.tail = current
    current.next = None
    self.len -=1
    if self.len == 1:
      self.tail = self.head
    return value
  def unshift(self, val):
    newNode = Node(val)
    self.len+=1
    if self.head==None:
      self.head=newNode
      self.tail=newNode
    elif self.head==self.tail:
      self.head=newNode
      self.head.next=self.tail
    else:
      newNode.next=self.head
      self.head=newNode
  def shift(self):
    self.len-=1
    if self.head==None:
      self.len+=1
      return None
    elif self.head==self.tail:
      retval = self.head
      self.head=None
      self.tail=None
      return retval
    else:
      retval = self.head
      self.head=retval.next
      return retval
  def get(self, idx):
    if idx>self.len:
      return None
    elif idx==self.len:
      return self.tail
    else:
      current = self.head
      while idx>0:
        current=current.next
        idx-=1
      return current
  def setIdx(self, idx, value):
    toChange = self.get(idx)
  
    if toChange:
      toChange.value=value
    else:
      return None
  def insertIdx(self, idx, value):
    newNode = Node(value)
    if idx>self.len:
      return None
    elif idx==self.len:
      self.tail.next=newNode
      self.tail = newNode
    elif idx==0:
      newNode.next=self.head
      self.head = newNode
    else:
      previous = self.get(idx-1)
      this = self.get(idx)
      previous.next = newNode
      newNode.next = this
    self.len+=1
  def removeIdx(self, idx):
    if idx>self.len or idx:
      return None
    else:
      returnval = None
      if self.len==1:
        returnval = self.head
        self.head = None
        self.tail = None
      
      self.len-=1
      return returnval
  def rotate(self, rotations):
    rotations = rotations%self.len
    currentH = self.head
    currentT = self.tail
    currentT.next = currentH
    while rotations>0:
     currentH=currentH.next
      currentT=currentT.next
      rotations-=1
    self.head = currentH
    self.tail = currentT
    self.tail.next = None 



  
  #REVERSE, CYCLE CHECK DONE IN SEPARATE REPLS, but there are also hackerrank-checked versions below
  
wow = SLL()
wow.addNode(5)
print('tail', wow.tail.value)
print(wow.head.value, wow.head.next)
wow.addNode(77)
print('tail', wow.tail.value)
print(wow.head.next.value, wow.head.next.next)
wow.addNode(2)
# print('tail', wow.tail.value)
# print(wow.head.next.next.value, wow.head.next.next.next)
# print(wow.len)
# print(wow.pop().value)
# print(wow.tail.value)
# print(wow.head.value, wow.tail.value)
# print(wow.pop().value)
# print(wow.head.value, wow.tail.value)
# print(wow.pop().value)
# print(wow.head, wow.tail)

wow.setIdx(2, 1)
print('set', wow.head.next.next.value)

#CodeWars tested modifications:

#GET IDX:    
def get_nth(node, idx):
    if not node:
        raise Exception
    if idx<0:
        raise Exception
    current = node
    while current.next and idx>0:
        current = current.next
        idx-=1
    if idx>0:
        raise Exception
    return current


    
def insert_nth(head, index, data):
    # Your code goes here.
    # Return the head of the list.
    newNode = Node(data)
    current = head
    if index == 0:
        newNode.next = head
        return newNode
    while index>1 and current.next:
        current = current.next
        index-=1
    if index>=2:
        raise Error
    temp = current.next
    current.next = newNode
    newNode.next=temp
    return head

#Hackerrank tested:

def insertNodeAtPosition(head, data, idx):
    current = head
    newNode = SinglyLinkedListNode(data)
    while idx>1 and current.next:
        idx-=1
        current=current.next
    if idx>1: 
        return ValueError()
    else:
        newNode.next=current.next
        current.next=newNode
    return head

def deleteNode(head, idx):
    current = head
    if idx == 0:
        temp = head.next
        head.next = None
        return temp
    while idx>1 and current.next:
        idx-=1
        current=current.next
    if idx>1:
        return ValueError()
    else:
        temp = current.next
        current.next=current.next.next
        temp.next = None
        return head

def mergeLists(head1, head2):
    #print('ey')
    if not head1:
        return head2
    elif not head2:
        return head1
    save = head1
    small = head1
    large = head2
    if head1.data>head2.data:
        save = head2
        small = head2
        large = head1
    while small.next:
        #if small.data<=large.data:
            if small.next and small.next.data>=large.data:
                temp = small.next
                small.next = large
                small = large
                large = temp 
            else:
                small = small.next

def getNode(head, positionFromTail):
    print(positionFromTail)
    if not head or positionFromTail==None:
        return None
    pointerOne = head
    pointerTwo = head
    while positionFromTail>0 and pointerTwo:
        pointerTwo = pointerTwo.next
        positionFromTail-=1
    print(pointerOne.data, pointerTwo.data)
    if positionFromTail>0:
        return None
    else:
        while pointerTwo.next:
            pointerOne= pointerOne.next
            pointerTwo=pointerTwo.next
    print(pointerOne.data, pointerTwo.data)
    return pointerOne.data


def removeDuplicatesSorted(head):
    if not head or not head.next:
        return head
    current = head
    while head.next:
        if head.data == head.next.data:
            head.next = head.next.next
        else:
            head = head.next
    return current
def has_cycle(head):
    if not head or not head.next or not head.next.next:
        return False
    pointerOne = head
    pointerTwo = head.next.next
    while pointerTwo:
        if pointerOne==pointerTwo:
            return True
        pointerOne = pointerOne.next
        try:
            pointerTwo = pointerTwo.next.next
        except:
            return False
    return False


#leetcode:

    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not head:
            return None
        if k==0:
            return head
        current = head
        count = 1
        while current.next:
            count+=1
            current = current.next
        k=k%count
        #print(count, k)
        currentH = head
        currentT = current
        #print(currentH.val, currentT.val)
        currentT.next=currentH
        while count-k>0:
            #print('ey')
            currentH=currentH.next
            currentT=currentT.next
            count-=1
        #print(currentH.val, currentT.val)
        self.head = currentH
        currentT.next = None
        return currentH

def sorted_insert(head, data):
    if not data: 
        return head
    newNode = Node(data)
    if not head:
        return newNode
    if head.data>data:
        newNode.next=head
        return newNode
    current = head
    while current.next:
        if current.next.data>data:
            break
        current=current.next
    if not current.next:
        current.next=newNode
    else:
        temp = current.next
        current.next=newNode
        newNode.next=temp
    return head