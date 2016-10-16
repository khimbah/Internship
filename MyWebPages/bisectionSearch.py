#!/usr/bin/python

def update_guess(minimum, maximum):
    return (maximum + minimum) / 2

minimum = 0
maximum = 100
guess = update_guess(minimum, maximum )

print "Think of a number between 0 and 100"
print "Is the number %d?" % guess

indicator = raw_input('Please enter l, h or c to indicate low, high or correct respectively: ')

while indicator != 'c':
    if indicator == 'l':
        minimum = guess
        guess = update_guess(minimum, maximum)
    elif indicator == 'h':
        maximum = guess
        guess = update_guess(minimum, maximum)
    else:
        print "Sorry, I did not understand your input"
    print "Is the number %d?" % guess
    indicator = raw_input('Please enter l, h or c to indicate low, high or correct respectively: ')
else:
    if indicator == 'c':
        print "\nI got it! The number you guessed is %d\n" % guess

print "Well done! Thank you for playing with me"
