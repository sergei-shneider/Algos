# Uses python3
import sys

def optimal_sequence(m):
    coins = ["i/3", "i/2", "i-1"]
    coinArray = [0, 0]+[float("inf")]*(m-1)
    resultArray = [0, 0]+[float("inf")]*(m-1)
    i = 1
    while i<=m:
      #print(i)
      evalTwo = m-1
      evalThree = m-1
      evalSub = i-1
      if i%3==0:
        evalThree = i//3
      if i%2==0:
        evalTwo = i//2
      toCheck = float("inf")
      if coinArray[evalSub] < coinArray[evalTwo] and coinArray[evalSub] < coinArray[evalThree]:
        toCheck = coinArray[evalSub]
      elif coinArray[evalTwo]<coinArray[evalThree]:
        toCheck = coinArray[evalTwo]
        evalSub = evalTwo
      else:
        toCheck = coinArray[evalThree]
        evalSub = evalThree
      #toCheck = min(coinArray[evalSub], coinArray[evalTwo], coinArray[evalThree])
      if toCheck+1<coinArray[i]:
        coinArray[i]=toCheck+1
        resultArray[i]=evalSub
      i+=1
    #print(resultArray)
    output = [m]
    ticker = resultArray[-1]
    while ticker>0:
      output.append(ticker)
      ticker = resultArray[ticker]
    return output
input = sys.stdin.read()
n = int(input)
sequence = list(optimal_sequence(n))
print(len(sequence) - 1)
for x in sequence:
    print(x, end=' ')
