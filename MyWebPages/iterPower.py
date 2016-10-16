#!/usr/bin/python

def iterPower(base, exp):
    '''
    base: int or float.
    exp: int >= 0

    returns: int or float, base^exp
    '''
    if exp <= 0:
        return 1
    if exp >= 0:
        if exp == 1:
            return base
        else:
            return base * iterPower(base, (exp - 1))


print iterPower(3, 4)
print iterPower(4,2)
print iterPower(3,0)
