# python3


def max_pairwise_product(numbers):
  n = len(numbers)
  n_inf = float("-inf")
  max_product = n_inf
  maxi = n_inf
  max_neg = 1
  for num in numbers:
    if num<0:
      result = max_neg*num
      if result>max_product:
        max_product=result
      max_neg=min(max_neg, num)
    else:
      result = maxi*num
      if result>max_product:
        max_product=result
      maxi = max(maxi, num)
  return max_product


if __name__ == '__main__':
    input_n = int(input())
    input_numbers = [int(x) for x in input().split()]
    print(max_pairwise_product(input_numbers))