def partition32(A):
  lenA = len(A)
  if lenA<3:
    return 0
  sumA = sum(A)
  if sumA%3!=0:
    return 0
  cap = sumA//3
  print(cap)
  souvArr = [[False]*(lenA+1) for i in range(cap+1)]
  A.sort()
  cordArray = []
  for i in range(1, cap+1):
    for j in range(1, lenA+1):
      #print(souvArr, i, j)
      if A[j-1] == i or souvArr[i][j-1]:
        souvArr[i][j] = True
      else:
        temp = i-A[j-1]
        if temp >0 and souvArr[temp][j-1]:
          souvArr[i][j]=True
  #print(souvArr)
  return +souvArr[-1][-1]

def partition3(A):
  lenA = len(A)
  if lenA<3:
    return 0
  sumA = sum(A)
  if sumA%3!=0:
    return 0
  cap = sumA//3
  #print(cap)
  souvArr = []
  for i in range(cap+1):
    tempArr = [[False]*(lenA+1) for i in range(cap+1)]
    souvArr.append(tempArr)
  souvArr[0][0][0] = True
  #print(souvArr)
  #A.sort()
  for i in range(1, lenA+1):
    item_value = A[i-1]
    for j in range(cap+1):
      remain1 = j-item_value
      for k in range(cap+1):
        remain2 = k-item_value
        if j == 0 and k == 0:
          souvArr[0][0][i] = True
        elif item_value == j and True in [souvArr[k][l][i-1] for l in range(cap+1)]:
          souvArr[k][j][i] = True
        elif item_value == k and True in [souvArr[l][j][i-1] for l in range(cap+1)]:
          souvArr[k][j][i] = True
        elif souvArr[k][j][i-1]:
          souvArr[k][j][i] = True
        elif remain1>0 and souvArr[k][remain1][i-1]:
          souvArr[k][j][i] = True
        elif remain2>0 and souvArr[remain2][j][i-1]:
          souvArr[k][j][i] = True
  #print(souvArr)
  return souvArr[-1][-1][-1]

print(partition3([1,1,1,2,2,2,3,3,3]))
#print(partition32([20, 9, 13, 27, 25, 7 ,2, 9, 17, 15]))
#print(partition32([17, 59, 34, 57, 17, 23, 67, 1, 18, 2, 59]))

#print(partition32([1 ,2 ,3 ,4, 5, 5 ,7, 7, 8, 10, 12, 19, 25]))
#create a matrix 
#record coordinates where value == 1/3
#backtrack coordinates to see if any of them are unique

