def sqrt(num):
  att = int(num/2)
  while True:

    sqr = att*att
    if sqr>num:
      att-=1
    else:
      return int(att)
      

sqrt(81)

def solution(num): 
    if num<0: 
        raise ValueError 
    if num==1: 
        return 1 
    for k in range(1+(num/2)): 
        if k**2==num: 
            return k 
        elif k**2>num: 
            return k-1 
    return k  



def better_solution(num): 
    if num<0: 
        raise ValueError 
    if num==1: 
        return 1 
    low=0 
    high=1+(num//2) 
    
    while low+1<high: 
        mid=low+(high-low)//2 
        square=mid**2 
        if square==num: 
            return mid 
        elif square<num: 
            low=mid 
        else: high=mid 
            
    return low
    

print(better_solution(9))