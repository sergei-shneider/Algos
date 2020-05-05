def permutations(s, output = None):
    print(s)
    if output == None:
        output = []
    if len(s)==1:
        output = [s]
    else:
        for idx, letter in enumerate(s):
            print(idx,letter, s[:idx]+s[idx+1:])
            for perm in permutations(s[:idx]+s[idx+1:]):
                output+=[letter+perm]
    print(output)
    return set(output)


def permutations(string):
  if len(string) == 1: return set(string)
  first = string[0]
  rest = permutations(string[1:])
  result = set()
  for i in range(0, len(string)):
    for p in rest:
      result.add(p[0:i] + first + p[i:])
  return result