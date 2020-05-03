class Deque(object):
  def __init__(self):
    self.deque = []
    self.size = 0
  def isEmpty(self):
    return True if self.size == 0 else False
  def size(self):
    return self.size
  def fRemove(self):
    self.size-=1
    self.deque.pop(0)
  def rRemove(self):
    self.size-=1
    self.deque.pop
  def fInsert(self, val):
    self.size+=1
    self.deque.insert(0, val)
  def rInsert(self, val):
    self.size+=1
    self.deque.append(val)

class Deque:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def addFront(self, item):
        self.items.append(item)

    def addRear(self, item):
        self.items.insert(0,item)

    def removeFront(self):
        return self.items.pop()

    def removeRear(self):
        return self.items.pop(0)

    def size(self):
        return len(self.items)