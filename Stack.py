#Check if its empty
#Push a new item
#Pop an item
#Peek at the top item
#Return the size

class Stack(object):
  def __init__(self):
    self.stack = []
    self.size = 0
  def push(self, value):
    self.stack.append(value)
    self.size+=1
  def pop(self):
    self.size-=1
    return self.stack.pop()
  def peek(self):
    return self.stack[-1]
  def size(self):
    return self.size


class Stack(object):
    
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)