def in_range(nums, lowest, highest):
    """Print numbers inside range.

    - nums: list of numbers
    - lowest: lowest number to print
    - highest: highest number to print

    For example:

      in_range([10, 20, 30, 40], 15, 30)

    should print:

      20 fits
      30 fits
    """

    # YOUR CODE HERE
    sorted_list = sorted(nums)
    first = sorted_list[0]
    last = sorted_list[-1]

    print(fit_check(first, last, lowest))
    print(fit_check(first, last, highest))




def fit_check(first, last, num):
    if (num >= first) and (num <= last):
        return f"{num} fits"
    else:
        return f"{num} Doesn't fit"
    

in_range([10, 20, 30, 40, 50], 15, 30)       
