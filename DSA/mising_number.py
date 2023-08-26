def findMissing(arr):
    zeroFound = False
    
    if not arr:
        return "Array is empty"
    for num in arr:
        if not isinstance(num, int):
            return "Array contains non-integer values."
        if num == 0:
            zeroFound = True
        
    arr = list(set(arr))

    minVal, maxVal = min(arr), max(arr)
    
    total = (((maxVal-minVal) + 1)/2) * (minVal + maxVal)
    arrSum = sum(arr)

    res = int(total - arrSum)
    
    if res == 0 and zeroFound:
        return "Array contains no missing"
    else:
        return res

if __name__ == '__main__':
    test_arrays = [
        [-1,1],
        [-1,0,1],
        [-2, 0, 1, 2, 3, 4, 5],
        [4, 2, 1, 6, 3, 7],
        [0, 1, 2, 3],
        [1.5, 2.5, 3.5],
        [1, 2, "three", 4],
        [],
        [1, 2, 3, 4, 5],
    ]

    for arr in test_arrays:
        result = findMissing(arr)
        print(f"Array: {arr}, Missing Number: {result}")