def firstNonRepeating(s, isCaseSensetive = True):
    if (not isCaseSensetive):
        s = s.lower()
    count = [0] * 256
    for i in s:
        count[ord(i)] += 1

    index = -1
    k = 0

    for i in s:
        if count[ord(i)] == 1:
            index = k
            break
        k += 1

    return index

if __name__ == '__main__':
    string = 'gOog'
    index = firstNonRepeating(string)
    # For case sensetive
    res = "Not Found" if index == -1 else string[index]
    print("For case-sensetive: ", res)
    

    string = 'gOog'
    index = firstNonRepeating(string, False)
    # For case insensetive
    res = "Not Found" if index == -1 else string[index]
    print("For case-insensetive: ", res)