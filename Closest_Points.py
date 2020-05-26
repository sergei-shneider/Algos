#Uses python3
import sys
import math
from random import randint
from itertools import combinations

def distance_squared(first_point, second_point):
    return ((first_point[0] - second_point[0]) ** 2 + (first_point[1] - second_point[1]) ** 2)**0.5
    #return hypot(first_point.x - second_point.x, first_point.y - second_point.y)
def minimum_distance_squared_naive(points):
    min_distance_squared = float("inf")

    for p, q in combinations(points, 2):
        min_distance_squared = min(min_distance_squared,
                                   distance_squared(p, q))

    return "{0:.9f}".format(min_distance_squared)

def minimum_distance(points):
  #print(points)
  points.sort()
  return "{0:.9f}".format(mdsRecur(points, 0, len(points)-1))
  

def mdsRecur(points, start, end):
  if end-start==1:
    return distance_squared(points[start], points[end])
  midIdx = (end+start)//2
  minD = min(mdsRecur(points, start, midIdx), mdsRecur(points, midIdx, end))
  return closePoints(points[start:end], minD)

def closePoints(points, minIn):
  mid = len(points)//2
  findStart = 0
  findEnd = 0
  if len(points)==2:
    return minIn
  xToMatchSt = points[mid][0]-minIn
  xToMatchEnd = points[mid][0]+minIn
  left = mid
  right = mid
  while left>0:
    if points[left][0] < xToMatchSt:
      findStart = left+1
      break
    left-=1
  while right<len(points):
    if points[right][0] > xToMatchEnd:
      findEnd = right-1
      break
    right+=1
  if findEnd+findStart == 0:
    return minIn
  if findEnd == 0: 
    findEnd = right
  centerEdge = sorted(points[findStart:findEnd+1], key = lambda x: x[1])
  minOut = minIn
  for i in range(0, len(centerEdge)):
    j = i+1
    while j<i+7 and j<len(centerEdge):
      if (centerEdge[j][1]- centerEdge[i][1])< minIn:
        toCheck = distance_squared(centerEdge[i], centerEdge[j])
        if toCheck<minOut:
          minOut = toCheck
      j+=1
  return minOut

# def test_random():
#     for i in range(25):
#       points = []
#       for n in [2, 5, 10, 100]:
#           for max_value in [1, 2, 3, 1000]:
              
#               for _ in range(n):
#                   x = randint(-max_value, max_value)
#                   y = randint(-max_value, max_value)
#                   points.append(Point(x, y))
#       a = minimum_distance(points)
#       b = minimum_distance_squared_naive(points)
#       if  a!=b :
#         print(points, a, b)
#         break
#     print('success')
def test():
  while True:
      nn = int(100)
      y=[]
      x=nn*[randint(-50, 50)]
      for i in range(nn):
          y.append(randint(-50, 50))
      pointArr = []
      for i, j in zip(x, y):
        pointArr.append([i, j])
      #print(pointArr)
      a = minimum_distance(pointArr)
      b = minimum_distance_squared_naive(pointArr)
      if a==b:
          print("OK")
      else:
          print("WRONG")
          print("Array: ", pointArr)
          print("A: ", a)
          print("B: ", b)
          break



test()