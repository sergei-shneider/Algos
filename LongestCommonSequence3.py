
def lcs3(a, b, c):
  lenA = len(a)+1
  lenB = len(b)+1
  lenC = len(c)+1
  valArr = []
  for i in range(lenC):
    valOne = [[0]*(lenB) for i in range(lenA)]
    valArr.append(valOne)
  valArr[1][1][1]=1
  print(valArr)
  for k in range(1, lenC):
   for i in range(1, lenA):
    for j in range(1, lenB):
      #print(valArr, a[i], b[j])
      if a[i-1]==b[j-1]==c[k-1]:
        valArr[k][i][j] = valArr[k-1][i-1][j-1]+1
      else:
        valArr[k][i][j]=max(valArr[k][i][j-1], valArr[k][i-1][j], valArr[k-1][i][j],
        valArr[k][i-1][j-1], valArr[k-1][i-1][j], valArr[k-1][i][j-1])
  return valArr[lenC-1][lenA-1][lenB-1]

 
a = [2, 8, 7, 9]
b = [2, 8, 2, 0]
c = [3, 4, 2, 8]
print(lcs3(a, b, c))
a='123'
b='213'
c = '135'
print(lcs3(a, b, c))       
X = "83217"
Y = "821387"
Z = "683147"
print("Length of LCS is ", lcs3(X, Y, Z))