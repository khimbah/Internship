#!/usr/bin/python
import re
count = 0
s = 'azcbobobegghakl'
word1 = re.search('bob', s)
word2 = re.search('bob', s[::-1])
if word1 and word2:
   count +=2
print "bob occurs %d %s" %(count, 'times')
print s[0:]