
def searchHead(nums, target):
  start = 0
  end = len(nums)-1
  mid = 0
  found = -1
  while start<=end:
    mid = (start+end)//2
    if nums[mid] > target:
      end = mid-1
    else:
      found = mid
      start = mid+1
  #print(found, nums[found])
  return found
def searchTail(nums, target):
  start = 0
  end = len(nums)-1
  mid = 0
  found = -1
  while start<=end:
    mid = (start+end)//2
    #print(nums[mid], mid, start, end, target, found)
    if nums[mid]<target:
      
      end = mid-1
    else:
      found = mid
      start = mid+1
  #print(found, nums[found])
  return found
def fast_count_segments(starts, ends, points):
  starts.sort()
  ends.sort(reverse=True)
  #print(sortSeg)
  count = [0]*len(points)
  for i in range(len(points)):
    #print("start")
    startIntersect = searchHead(starts, points[i])+1
    print(points[i], 'start', startIntersect)
    #print("end")
    endsIntersect = searchTail(ends, points[i])+1
    print(points[i], 'end', endsIntersect)
    #print(startIntersect, endsIntersect, len(starts))
    count[i] = max(startIntersect+endsIntersect-len(starts), 0)
  return count
print(fast_count_segments([0, 4, 7], [5, 5, 10], [2, 3, 8, 9, 11])) #1 1 1 1 0
print(fast_count_segments([-10], [10], [-100, 100, 0])) #0 0 1
print(fast_count_segments([0, -3, 7], [5, 2,10], [1,6]))# 2 0
print(fast_count_segments([0, 1, 1, 1, 2], [1, 2,2, 2,3], [1,6]))