def remove_duplicate_words(s):
    s = s.split()
    output = []
    dict = {}
    for word in s:
        if word not in dict:
            dict[word] = 1
            output.append(word)
    return ' '.join(output)
        
def removeDuplicates(string): 
    result=[] 
    seen=set() 
    
    for char in string: 
        if char not in seen: 
            seen.add(char) 
            result.append(char)
            
    return ''.join(result) 

