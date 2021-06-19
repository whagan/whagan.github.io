---
layout: post
title: "Binary Search"
date: 2021-06-10 12:00:00 -0000
categories: leetcode searching binary-search easy algorithms epi geeksgeeks
---

### Leetcode

**Problem 35 Binary Search** 

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

The algorithm must have `O(log n)` runtime complexity.

#### Solution

The required runtime and nature of the search (*sorted* array) hints at the appropriate course of action: binary search.

Iterate until low equals high. If the element is found during iteration, return its index. Else, after iteration, if element at low index is less than target, return low + 1. Else return low.



[Leetcode submission](https://leetcode.com/submissions/detail/507525508/)

### Elements of Programming Interview

**11.1 Search a Sorted Array for First Occurrence of *k***

Binary search commonly asks for the index of *any* element of a sorted array that is equal to a specified element.

Write a method that takes a sorted array and a key and returns the index of the *first* occurrence of that key in the array. Return -1 if the key does not appear in the array.

*Hint:* What happens when every entry equals *k*? Do not stop when you first see *k*.

#### Solution

A naive approach would be to use binary search to find the index of any element equal to the key *k*. Then, after finding it, to traverse backwards to find the first occurrence of that element.

However, this traversal eliminates the advantage of binary search.

A better solution would be to continue with binary search after finding the index of any element equal to the key *k*. At this initial finding, you reduce the set of candidates by removing all elements above the current index. That is, set `high` to `mid`:

```python
def bin_search(nums, target):
    low = 0
    high = len(nums) - 1
    while (low < high):
        mid = low + (high - low) // 2
        if (nums[mid] == target):
            high = mid
        elif (nums[mid] < target):
            low = mid + 1
        else:
            high = mid - 1
    if not nums[high] == target:
        return -1
    else:
        return high
```

**11.1 (Variant) Search a Sorted Array for First Occurrence of Element *Greater Than* *k***

Design an efficient algorithm that takes a sorted array and a key and find the index of the *first* occurrence of an element greater than that key. 

#### Solution

This solution feels a bit untidy, especially the `if` conditional in the last `if-else` statement.

```python
def bin_search(nums, target):
    low = 0
    high = len(nums) - 1
    while (low <= high):
        mid = low + (high - low) // 2
        if (nums[mid] <= target):
            low = mid + 1
        else:
            high = mid - 1
    if high == len(nums) - 1 or not nums[high] == target:
        return -1
    else:
        return high + 1
```
