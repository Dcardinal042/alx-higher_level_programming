#!/usr/bin/python3
# Author - okoh ifeanyichukwu

d = 0
for c in range(ord('z'), ord('a') - 1, -1):
    print("{}".format(chr(c - d)), end="")
    d = 32 if d == 0 else 0
