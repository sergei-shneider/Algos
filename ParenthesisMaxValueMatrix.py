import re

def evalt(a, op, b):
    #print(a, op, b)
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    else:
        assert False
def minMax(i, j, op, m, M):
  min1 = float("inf")
  max1 = float("-inf")
  #print(op)
  #print(i, j)
  for k in range(i, j):
    a = evalt(M[i][k], op[k], M[k+1][j])
    b = evalt(M[i][k], op[k], m[k+1][j])
    c = evalt(m[i][k], op[k], M[k+1][j])
    d = evalt(m[i][k], op[k], m[k+1][j])
    min1 = min(min1, a, b, c, d)
    max1 = max(max1, a, b, c, d)
    #print(min1, max1, a, b, c, d)
  return (min1, max1)

def get_maximum_value(dataset):
    nums, ops = preprocess(dataset)
    #print(nums, ops)
    totalNums = len(nums)
    m = [[0]*(totalNums) for i in range(totalNums)]
    M = [[0]*(totalNums) for i in range(totalNums)]
    for i in range(totalNums):
      m[i][i] = nums[i]
      M[i][i] = nums[i]
    for s in range(1, totalNums):
    #   #print('s', s)
      for i in range(totalNums-s):
    #     print('i', i)
        j = i+s
        #print(i, j)
    #     print(s)
        #print('ops', ops[s-1])
        m[i][j], M[i][j] = minMax(i, j, ops, m, M)
        print('m: ', m)
        print('M: ', M)
    print('m: ', m)
    print('M: ', M)
    return M[0][-1]

def preprocess(dataset):
  nums = re.split("\D+", dataset)
  ops = re.split("[0-9]+", dataset)[1:-1]
  for i in range(len(nums)):
    nums[i] = int(nums[i])
  return (nums, ops)



#print(get_maximum_value("5-8+7*4-8+9"))

print(get_maximum_value("1+2-3*4-5"))

