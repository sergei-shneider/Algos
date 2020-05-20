
import random
def partition3(a, l, r):
    x = a[l]
    j = l
    k = 0
    #print(a[l+1:r+2])
    for i in range(l + 1, r + 1):
        if a[i] < x:
            j += 1
            a[i], a[j] = a[j], a[i]
        print(a)
    a[l], a[j] = a[j], a[l]
    print(a)
    k = j
    print(a[k])
    temp = j
    print('all', k, j, a[k], a[j])
    for i in range(j+1, r+1):
        if a[i] == x:
          k+=1
          a[i], a[k] = a[k], a[i]
        print(a)
    print(k)
    a[temp], a[k] = a[k], a[temp]
    print('final', a, k, j)
    #print(x, a[j], a)
    #print(j, k, a[j-k])
    return [j, k]

def randomized_quick_sort(a, l, r):
    print(l, r)
    if l >= r:
        return
    k = random.randint(l, r)
    #print('al', a[k])
    a[l], a[k] = a[k], a[l]
    #use partition3
    m = partition3(a, l, r)
    randomized_quick_sort(a, l, m[0]-1);
    randomized_quick_sort(a, m[1]+1, r);
    

a = [2,3,6,2,7, 3, 4, 3]
print(randomized_quick_sort(a, 0, 7))
print(a)