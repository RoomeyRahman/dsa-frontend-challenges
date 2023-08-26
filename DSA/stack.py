class Node:
    def __init__(self, val, Min):
        self.val = val
        self.min = Min

class MinStack:
    def __init__(self):
        self.s = []
 
    def push(self, x):
        if not self.s:
            self.s.append(Node(x, x))
        else:
            Min = min(self.s[-1].min, x)
            self.s.append(Node(x, Min))
 
    def pop(self):
        return self.s.pop().val
 
    def top(self):
        return self.s[-1].val
 
    def Min(self):
        return self.s[-1].min
 
 
if __name__ == '__main__':
    s = MinStack()
    s.push(-1)
    s.push(10)
    s.push(-4)
    s.push(0)
    print(s.Min())
    print(s.pop())
    print(s.pop())
    print(s.Min())