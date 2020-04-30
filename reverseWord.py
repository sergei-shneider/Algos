def reverseWords(str):
    if len(str)==1:
        return str[0]
    return str[-1]+reverseWords(str[0:-1])


def reverse(s):
    
    # Base Case
    if len(s) <= 1:
        return s

    # Recursion
    return reverse(s[1:]) + s[0]