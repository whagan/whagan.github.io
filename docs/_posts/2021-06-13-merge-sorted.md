---
layout: post
title: "Merge Sorted Arrays"
date: 2021-06-13 12:00:00 -0000
categories: leetcode easy algorithms epi merge-sorted-arr
---

### Leetcode

**Problem 88 Merge Sorted Array** 

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. 

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function but instead be *stored inside the array* `nums1`. To accommodate this, `nums1` has a length of `m + n` where the first `m` elements denote the elements that should be merged and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

#### Solution

[Leetcode submission](https://leetcode.com/submissions/detail/508078389/)

### Elements of Programming Interview

**13.2 Merge Two Sorted Arrays**

Suppose you are given two sorted arrays of integers. If one array has enough empty entries at its end, it can be used to store the combined entries of the two arrays in sorted order.

Write a program which takes as input two sorted arrays of integers and updates the first to the combined entries of the two arrays in sorted order. Assume the first array has enough empty entries at its end to hold the result.

#### Solution

The challenge is writing the result back into the first array. Using a third array, you would merely iterate through both lists in tandem, appending the smaller of two entries to the third array. This results in O(m + n) time, where m and n are the number of entries in the arrays.

In the worst case, every entry in the second array is smaller than every entry in the first array. In this scenario, you would update every entry in the first list for every entry in the second array, i.e., O(mn). Obviously, this is not ideal.

The idea is to maintain three numbers: the index of the current entries being compared (one in the first array, another in the second array), and the next permissible index in the first array that may be written to. This index may contain either an empty space or an entry that has already been processed and therefore available for overwriting.

```python
def merge(self, first, m, second, n):
        i = m - 1
        j = n - 1
        idx = m + n - 1
        while (i >= 0 and j >= 0):
            if first[i] > second[j]:
                first[idx] = first[i]
                i -= 1
            else:
                first[idx] = second[j]
                j -= 1
            idx -= 1
        while (j >= 0):
            first[idx] = second[j]
            idx -= 1
            j -= 1
        return first
```