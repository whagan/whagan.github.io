---
layout: post
title: "Binary Search"
date: 2021-06-21 12:00:00 -0000
categories: leetcode easy algorithms binary-search 
---

### LeetCode

**Problem 704 Binary Search**

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

#### Solution

Straight up binary search. Used recursion, hence the helper `__init__` function. 

The trick is the corner case. This can probably be done several ways but if `n` is 1, then the only item in the list is at index 0. Keep that in mind.

```python
class Solution(object):
    def __init__(self, idx=0):
        self.idx = idx    
    def search(self, nums, target):
        n = len(nums)
        if n == 1:
            if target == nums[0]:
                return self.idx
            else:
                self.idx = -1
        elif target == nums[n//2]:
            self.idx += n//2
        elif target > nums[n//2]:
            self.idx += n//2
            self.search(nums[n//2:], target)
        else:
            self.search(nums[:n//2], target)
        return self.idx
```

[Leetcode submission](https://leetcode.com/submissions/detail/518943071/)



