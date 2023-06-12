#!/usr/bin/python3
"""Module that holds MyInt class"""


class MyInt(int):
    """
    Class for MyInt. MyInt is a rebel.
    MyInt has == and != operators inverted
    """

    def __eq__(self, other):
        return not super().__eq__(other)

    def __ne__(self, other):
        return super().__eq__(other)
