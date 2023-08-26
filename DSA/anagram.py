def isAnagram(str1, str2):
    mapping = {}
    for i in str1:
        mapping[i] = mapping.get(i, 0) + 1
    
    for i in str2:
            if i in mapping:
                mapping[i] = mapping.get(i, 0) - 1
            else:
                return False
    for key, value in mapping.items():
        if value != 0:
            return False
    
    return True

if __name__ == '__main__':
    s = 'Café'
    t = 'Cafe'
    res = isAnagram(s,t)
    
    print("isAnagram: ", res)