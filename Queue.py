#Check if Queue is Empty
#Enqueue
#Dequeue
#Return the size of the Queue

class Queue(object):
  def __init__(self):
    self.queue = []
    self.size = 0
    self.removed = 0
  def Enqueue(self, value):
    self.queue.append(value)
    self.size +=1
  def Dequeue(self, value):
    self.removed+=1
    return self.queue[self.removed-1]

class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)