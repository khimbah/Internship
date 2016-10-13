#!/usr/bin/python

class User:
    name = " "


def __init__(self, name):
    self.name = name


def sayHello(self):
    print " Hello , my name i s " + self.name


# create virtual objects
james = User("James")
david = User("David")
eric = User("Eric")

# c a l l m e t h o d s owned by v i r t u a l o b j e c t s
james.sayHello()
