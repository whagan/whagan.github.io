---
layout: post
title: "Squares of Sorted Array"
date: 2021-06-15 12:00:00 -0000
categories: leetcode searching binary-search easy algorithms epi geeksgeeks
---

### LeetCode

**Problem 977 Squares of Sorted Array**

Given an integer array `nums` in **non-decreasing** order, return an array of **the squares of each number** sorted in non-decreasing order.

**Follow up:** Squaring each element and sorting the new array is very trivial. Can you find an `O(n)` solution using a different approach?

#### Solution

[Leetcode submission](https://leetcode.com/submissions/detail/508861149/)

With this problem, I kept putting the cart before the horse, so to speak. Not only did I attempt to solve the problem in one pass (`O(n)`), but I was also attempting to solve it without using any auxiliary space. 

Eventually, I gave up and employed an extra array structure to append the sorted squares. The runtime is still `O(n)` (as specified by the problem), but if there's a way to achieve `O(n)` runtime in `O(1)` space, I'd love to hear about it.  
