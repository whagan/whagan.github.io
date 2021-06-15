---
layout: post
title: "Merge Sorted Arrays"
date: 2021-06-13 12:00:00 -0000
categories: leetcode easy algorithms epi
---

### Leetcode

**Problem 88 Merge Sorted Array** 

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. 

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function but instead be *stored inside the array* `nums1`. To accommodate this, `nums1` has a length of `m + n` where the first `m` elements denote the elements that should be merged and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

#### Solution



[Leetcode submission]()

### Elements of Programming Interview

**13.2 Merge Two Sorted Arrays**

Suppose you are given two sorted arrays of integers. If one array has enough empty entries at its end, it can be used to store the combined entries of the two arrays in sorted order.

Write a program which takes as input two sorted arrays of integers and updates the first to the combined entries of the two arrays in sorted order. Assume the first array has enough empty entries at its end to hold the result.

#### Solution


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
