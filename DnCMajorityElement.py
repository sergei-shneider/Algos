
def get_majority_element(a, left, right):
  #print(a[left:right+1])
  if left == right:
    return a[left]

  mid = (right-left)//2+left
  leftOut = get_majority_element(a, left, mid)
  rightOut = get_majority_element(a, mid+1, right)
  #print(leftOut, rightOut)
  leftCount = 0
  rightCount = 0
  if leftOut == rightOut:
    return leftOut
  else:
    leftCount = sum(1 for i in range(left, right+1) if a[i]==leftOut)
    rightCount = sum(1 for i in range(left, right+1) if a[i]==rightOut)
  if leftCount>right//2:
    return leftOut
  elif rightCount>right//2:
    return rightOut
  else: 
    return None
print(get_majority_element([2, 3, 9, 2, 2], 0, 4))


def get_majority_element(a, left, right):
  if right == len(a):
    right-=1
  if left == right:
    return a[left]

  if left + 1 == right:
    return a[left] if a[left] == a[right] else None
  majority = right - left + 1
  mid = (right-left) // 2 +left

  leftOut = get_majority_element(a, left, mid)
  rightOut = get_majority_element(a, mid + 1, right)

  if leftOut == rightOut:
    return leftOut

  countLeft = 0
  countRight = 0
  print(leftOut, rightOut, a[left:right+1])
  for i in range(left, right + 1):
    if a[i] == leftOut:
      countLeft+=1
    if a[i] == rightOut:
      countRight+=1
  
  if leftOut and countLeft * 2 > majority:
    return leftOut

  if rightOut and countRight * 2 > majority:
    return rightOut
  return -1

# def get_majority_element(a, left, right):
#   dictE = {}
#   for item in a:
#     if item in dictE:
#       dictE[item]+=1
#     else:
#       dictE[item]=1
#   print(dictE, len(a))
#   if max(dictE.values())>len(a)/2:
#     return 1
#   else:
#     return 0

t2 = [512766168, 717383758, 5, 126144732, 5, 573799007, 5, 5, 5, 405079772]
print(get_majority_element(t2, 0, 9))