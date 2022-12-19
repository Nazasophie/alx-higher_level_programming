#!/usr/bin/python3

[2;2R[>77;30601;0c]10;rgb:bfbf/bfbf/bfbf]11;rgb:0000/0000/0000def safe_print_division(a, b):
    """Returns the division of a by b."""
    try:
        div = a / b
    except (TypeError, ZeroDivisionError):
        div = None
    finally:
        print("Inside result: {}".format(div))
    return (div)
