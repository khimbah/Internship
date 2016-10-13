#!/usr/bin/python

s = 'azcbobobegghakl'
i = 0
sub_string = 0
for index in range(len(s) - 1):
    if s[i] < s[i + 1]:
        sub_string = s[i] + s[i + 1]
        i += 1
print "Longest substring in alphabetical order is: %s " % sub_string
