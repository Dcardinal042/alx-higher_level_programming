#!/usr/bin/python3
# Author - okoh ifeanyichukwu

def remove_char_at(str, d):
    if d < 0:
        return (str)
    return (str[:d] + str[d+1:])
