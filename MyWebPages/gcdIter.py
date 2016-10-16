#!/usr/bin/python
def gcd(a, b):
    """
    The greatest common divisor of two positive integers
    is the largest integer that divides each of them without remainder
    :param a:
    :param b:
    :return:
    """
    n = 10
    answer = 0
    while n >= 1:
        if a % b == 0:
            print "%d is the greatest common divisor" % b
            break
        elif b % a == 0:
            print "%d is the greatest common divisor" % a
            break
        else:
            if a % n != 0 and b % n != 0:
                n -= 1
                answer = "%d is the greatest common divisor" % n
    return answer


print gcd(24, 12)
