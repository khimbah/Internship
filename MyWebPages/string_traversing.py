#!/usr/bin/python
s = 'azcbobobegghakl'

i = 0
j = 3
count = 0
for index in range(len(s)):
    if s[i:j] == 'bob':
        count += 1
        i += 1
        j += 1
    elif s[i:j] != 'bob':
        i += 1
        j += 1
print  "Number of times bob occurs is: %d" %count
