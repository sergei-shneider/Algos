def optimal_weight(cap, warray):
  sackArr = [[0]*(cap+1) for i in range(len(warray)+1)]
  warray.sort()
  for j in range(1, len(warray)+1):
    for i in range(1, cap+1):
      #print(i, warray[j-1])
      tempOne = max(sackArr[j][i-1], sackArr[j-1][i])
      if i-warray[j-1]<0:
        sackArr[j][i]=tempOne
      else:
        tempTwo = sackArr[j-1][i-warray[j-1]]+warray[j-1]
        print(tempOne, tempTwo)
        sackArr[j][i] = max(tempOne, tempTwo)
  #print(sackArr)
  return sackArr[-1][-1]


print(optimal_weight(10, [1,4,8]))