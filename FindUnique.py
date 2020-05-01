def unique(arrIn):
  dict = {}
  for num in arrIn:
    if num in dict:
      dict[num]+=1
    else:
      dict[num]=1
  for key in dict:
    if dict[key]==1:
      return key



print(unique([1, 1, 2, 2, 3]))


def solution(id_list):
    
    # Initiate unique Id
    unique_id = 0
    
    # XOR fo revery id in id list
    for i in id_list:
        
        # XOR operation
        unique_id ^= i
    
    return unique_id