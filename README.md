# Incorrect Usage of $inc Operator in MongoDB Update

This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is used to increment a numeric field by a specified value.  However, using a string instead of a number will lead to unexpected results or errors.

## Bug
The code attempts to increment the `field` by 1, but uses the string "1" instead of the number 1. This results in an error. 

## Solution
The correct usage is to provide a numeric value to the `$inc` operator.  The updated code demonstrates the correction.