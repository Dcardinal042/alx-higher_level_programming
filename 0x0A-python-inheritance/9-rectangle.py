#!/usr/bin/python3
"""
Module that holds rectangle class
"""
BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """Class for Rectangle"""

    def __init__(self, width, height):
        """Initiate Rectangle with attributes"""
        super().integer_validator("width", width)
        self.__width = width
        super().integer_validator("height", height)
        self.__height = height

    def __str__(self):
        """Define the string representation of the object"""
        return("[Rectangle] {}/{}".format(self.__width, self.__height))

    def area(self):
        """Return the are of the object"""
        return(self.__width * self.__height)
