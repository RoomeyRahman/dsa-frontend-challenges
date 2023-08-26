def firstRepeating(s, isCaseSensetive = True):
    if (not isCaseSensetive):
        s = s.lower()
    
    freq = {}

    for i in range(len(s)):
        if s[i] in freq:
            freq[s[i]] += 1
            return i
        else:
            freq[s[i]] = 1
    return -1

if __name__ == '__main__':
    string = 'GOoG'
    index = firstRepeating(string)
    # For case sensetive
    res = "Not Found" if index == -1 else string[index]
    print("For case-sensetive: ", res)
    

    string = 'GoOg'
    index = firstRepeating(string, False)
    # For case insensetive
    res = "Not Found" if index == -1 else string[index]
    print("For case-insensetive: ", res)