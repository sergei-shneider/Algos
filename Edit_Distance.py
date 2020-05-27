
def edit_distance(s, t, dictIn = {}):
    print(s, t, dictIn)
    #print(s, t)
    count= 0
    #print(s,t)
    if len(s)==0 and len(t)==0 or (len(s)==1 and len(t)==1 and s[0] == t[0]):
      return count
    elif len(s)==0 or len(t)==0:
      mod = len(s)
      if len(t)>len(s):
        mod = len(t)
      #print(s, t, mod)
      count+=mod
      return count
    elif len(s)==1 and len(t)==1:
      count+=1
      return count
    if s[0]==t[0]:
      count-=1
    count+=1
    remove = float("inf")
    insert = float("inf")
    replace = float("inf")
    if s[1:]+'.'+t[1:] in dictIn:
      replace = dictIn[s[1:]+'.'+t[1:]]
    else:
      replace = edit_distance(s[1:], t[1:], dictIn)
    if s[0]!=t[0]:
      if s+'.'+t[1:] in dictIn:
        insert = dictIn[s+'.'+t[1:]]
      else:
        insert = edit_distance(s, t[1:], dictIn)
        dictIn[s+'.'+t[1:]] = insert
      if s[1:]+'.'+t in dictIn:
        remove = dictIn[s[1:]+'.'+t]
      else:
        remove = edit_distance(s[1:], t, dictIn)
        dictIn[s[1:]+'.'+t] = remove
    if len(s)==3 and len(t)==4:
      print(replace, remove, insert, count )
    dictIn[s+'.'+t] = count+min(replace, remove, insert)
    #print(dictIn[s+t])
    return dictIn[s+'.'+t]
# print(edit_distance("rzwfhuepffk","mhgdtfrqijqildjzolohxobticqjhcdyevlanjrxgnskobfkpfkzfevknysu"))
# print(edit_distance("mhgdtfrqijqildjzolohxobticqjhcdyevlanjrxgnskobfkpfkzfevknysu", "rzwfhuepffk"))
#print(edit_distance("rzwfhuepffk", "rzwfhuekk"))
#print(edit_distance( "rzwfhuekkss","rzwfhuepffk",))
# print(edit_distance("rzwfhuek", "rzwfhuepffk"))
# print(len("mhgdtfrqijqildjzolohxobticqjhcdyevlanjrxgnskobfkpfkzfevknysu"), len("rzwfhuepffk"))
# print(len("ozshhszsexwnzsxrkgopcqdixdztintyxdwbzufgmmgpaxxlqckbjckejpbcsbncrbvqtmgyuiwboucadfreaectfb"), len("peyjdoqkcriuizutjljrjgsmmccppmaghuqzoumwxjxsvsjtqjifomwixwlxrvthemkiocjkfpthtfphbuvkbyb"))
# # print(edit_distance("short", "ports"))
# print(edit_distance("ab", "abo"))
# print(edit_distance("editing", "distance"))
# print(edit_distance("intention","execution"))
#import editdistance
# import random
# import string
# generatedStrings = []
# for i in range(100):
#   generatedStrings.append(''.join(random.choices(string.ascii_lowercase, k = random.randint(0, 90))))
# print(generatedStrings)
# #editdistance.eval("short", "ports")

# for i in range(len(generatedStrings)-1):
#   test = edit_distance(generatedStrings[i], generatedStrings[i+1])
#   evaled = editdistance.eval(generatedStrings[i], generatedStrings[i+1])
#   if test!=evaled:
#     print("Test result: ", test)
#     print("evaled result: ", evaled)
#     print("String1: ", generatedStrings[i])
#     print("String2: ", generatedStrings[i+1])
# errarr = [(52, 53, 'hzhikwzccytkfdolavjokcucoyjghoishpcpcjicdzshwtymmvpedvlydgc', 'ttwcwcxdulquwdhxebwkrgaaaxyhpclyauckbpcfottkatggwrwfkyvnmcc'), (51, 52, 'hweepqeqyjsavxkvyxapvpirtrztjncbfphmankfspzzhosxogbytzhpbsswdox', 'obehgorxeyrwevpbarxuxzsdoxxz'), (48, 49, 'ktmbgwsjjkmmltrtgdrbxnwcntuqneputrisajelwdugxtianfdhld', 'mrjlmgcpzrgmwdlawnimebreogjevhdrggynkpgufvwnmeuvnddn'), (47, 48, 'nefptdlxhubrnrwxtqwbojpofayoqjvoahqxrlsyjeaa', 'sbztbunwznzudtfeudallgirvjlafepmxololhagesmzohvvvxiouyda'), (60, 58, 'wwymqhvihafbf', 'phegjkbjuoufnlzkcuuizuabfbsfxnydcjxsufszjvxqzyrpedxelgsaiggezjh'), (17, 18, 'rdbkdqqjxwljhtfuu', 'grbsmgoowoqkpouuyvvau')]

# for each in errarr:
#   print(edit_distance(each[2], each[3]))
#   print(len(each[2]), len(each[3]))
erra=[(9, 10, 'hvktglpfdr', 'vdwpbqrrpp'), (6, 7, 'hircbunf', 'lvwbubffi'), (5, 6, 'kuter', 'nzefrlr'), (8, 9, 'btgaez', 'prezzxxjk'), (2, 3, 'oqe', 'qeed')]

print(edit_distance("oqe", "qeed"))