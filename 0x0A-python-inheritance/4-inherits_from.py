#!/usr/bin/python3
"""
Module to demonstrate inheritance
"""


def inherits_from(obj, a_class):
    """Check if the obj is a subclass of a_class"""

    if (isinstance(obj, a_class)) and (type(obj) != a_class):
        return(True)
    else:
        return(False)
