---
layout: post
title: "Well-Formedness"
date: 2021-06-10 12:00:00 -0000
categories: leetcode stacks easy algorithms epi geeksgeeks
---

### LeetCode

**Problem 20 Valid Parentheses** 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.


### Elements of Programming Interview

**8.3 Test a String Over "{,},(,)[,]" for Well-Formedness**

A string over the characters "{,},(,)[,]" is said to be well-formed if the different  types of brackets match in the correct order.

Write a program that tests if a string made up of the characters is well-formed.

### Solution

* Declare a character stack *S*.
* Traverse the expression string *exp*.
    1. If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘), then push it onto stack.
    2. If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’), then pop from *S* and if the popped character is the matching starting bracket then continue. Else, the brackets are not balanced.

**Time Complexity** `O(n)`, since for each character we perform `O(1)` operations.

[Leetcode submission](https://leetcode.com/submissions/detail/506602193/)


