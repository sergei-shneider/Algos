def merge(a, b):
  count = a[1]+b[1]
  i = 0
  j = 0
  new = []
  while i<len(a[0]) and j<len(b[0]):
    if a[0][i]<=b[0][j]:
      new.append(a[0][i])
      i+=1
    else:
      new.append(b[0][j])
      count+=(len(a[0])-i)
      j+=1
  return [new+a[0][i:]+b[0][j:], count]


def get_number_of_inversions(a, b, left, right):
  m = mergeSort(a)
  return m[1]


def mergeSort(a):
  if len(a)<=1:
    return [a, 0]
  ave = len(a)// 2
  left = mergeSort(a[:ave])
  right = mergeSort(a[ave:])
  return merge(left, right)

print(get_number_of_inversions([1, 2, 3, 4, 6, 2, 4, 5], [], 1, 2))

# def get_number_of_inversions(a, b, left, right):
#     count = 0
#     if right - left <=1:
#         return a
#     else:
#         ave = (left + right) // 2
#         get_number_of_inversions(a, b, left, ave)
#         get_number_of_inversions(a, b, ave, right)
#     return merge(a, b, left, right, count)
# def merge(a, b, left, right, count):
#     if right - left <= 1:
#       return count
#     i = 0
#     j = left
#     total = 0
#     while i<left and j<right: 
#         print(a[i], a[j])
#         if a[i]<=a[j]:
#           b[total] = a[i]
#           i+=1
#         else:
#           count+=left-i
#           b[total] = a[j]
#           j+=1
#         total+=1
#     while i<left:
#       b[total]=a[i]
#       i+=1
#       total+=1
#     while j<right:
#       b[total] = a[j]
#       j+=1
#       total+=1
#       a = b.copy()
#     return a

# a = [2, 3, 9, 2, 9]
# n = 5
# b = n * [0]
# print(get_number_of_inversions(a, b, 0, len(a)))
# print(a)

# # print(merge([1, 2, 3, 4, 6, 2, 4, 5], [0, 0, 0, 0, 0, 0, 0, 0], 5, 8))