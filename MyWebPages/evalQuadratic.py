#!/usr/bin/python

def evalQuadratic(a, b, c, x):
    '''
    a, b, c: numerical values for the coefficients of a quadratic equation
    x: numerical value at which to evaluate the quadratic.
    '''
    # Your code here
    return (a * x ** 2 + b * x + c)


answer = evalQuadratic(1, 2, 3, 4)
print answer



