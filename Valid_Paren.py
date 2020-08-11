class Solution:
    def isValid(self, s: str) -> bool:
        bDict = {'{':'}','[':']','(':')'}
        stack = [];
        if len(s)==0: 
            return True
        if len(s)%2!=0:
            return False
        for letter in s:
            if letter in bDict.keys():
                stack.append(letter)
            else:
                if len(stack) == 0:
                    return False
                elif letter!=bDict[stack.pop(-1)]:
                    return False
        if len(stack)>0:
            return False
        return True
                
            
        
