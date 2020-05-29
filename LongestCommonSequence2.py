
def lcs2(a, b):
  lenA = len(a)+1
  lenB = len(b)+1
  valArr = [[0]*(lenB) for i in range(lenA)]
  for i in range(1, lenA):
    for j in range(1, lenB):
      #print(valArr, a[i], b[j])
      if a[i-1]==b[j-1]:
        valArr[i][j] = valArr[i-1][j-1]+1
      else:
        valArr[i][j]=max(valArr[i-1][j], valArr[i][j-1])
  return valArr[lenA-1][lenB-1]

a = [2, 8, 7, 9]
b = [2, 8, 2, 0]
print(lcs2(a, b))
a='123'
b='321'
print(lcs2(a, b))       
X = "AGGTAB"
Y = "GXTXAYB"
#print("Length of LCS is ", lcs2(X, Y))