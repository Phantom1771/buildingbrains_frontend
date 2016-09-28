#! /usr/bin/env python3
#################################################################################
#     File Name           :     test.py
#     Created By          :     Peilun Zhang
#     Creation Date       :     [2016-09-27 21:53]
#     Description         :     Test file for travis CI build
#################################################################################

def multiply(a, b):
    return a * b;

def test_strings_a_3():
        assert multiply(4, 3) == 12

