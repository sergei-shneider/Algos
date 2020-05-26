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
  #points.sort()
  return "{0:.9f}".format(mdsRecur(points))
  

def mdsRecur(points):
  if len(points)==2:
    return distance_squared(points[0], points[1])
  midIdx = len(points)//2
  minD = min(mdsRecur(points[:midIdx+1]), mdsRecur(points[midIdx:]))
  yPts = []
  i = 0
  while i<len(points):
    if abs(points[i][0]-points[midIdx][0])<minD:
      yPts.append(points[i])
    i+=1
  return closePoints(yPts, minD)

def closePoints(points, minIn):
  centerEdge = sorted(points, key = lambda x: x[1])
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


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    points = []
    i=1
    while i<len(data):
      point = [data[i], data[i+1]]
      points.append(point)
      i+=2
    points.sort()
    print(minimum_distance(points))