#!/usr/bin/python
s = 'azcbobobegghakl'
i = 0
j = 3
substring = s[i:j]
for index in range(len(s)):
    if id(''.join(sorted(s[i:j]))) == id(s[i:j]):
        i += 1
        j += 1
    elif id(''.join(sorted(s[i:j]))) != id(s[i:j]):
        i += 1
        j += 1
print "Longest string in alphabetical order is: %s" % substring