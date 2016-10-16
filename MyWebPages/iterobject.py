#!/usr/bin/python
import sys

list1 = [1, 2, 3, 4]
it = iter(list1)  # this builds an iterator object
print (next(it))  # prints next available element in iterator

for x in it:
    print (x, end=" ")
    while True:
        try:
            print (next(it))
        except StopIteration:
            sys.exit()  # you have to import sys module for this
