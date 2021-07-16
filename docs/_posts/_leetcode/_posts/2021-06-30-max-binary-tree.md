---
layout: post
title: "Maximum Binary Tree"
date: 2021-06-30 12:00:00 -0000
categories: leetcode medium algorithms binary-tree
---

**Problem 654**

You are given an integer array `nums` with no duplicates. A **maximum binary tree** can be built recursively from `nums` using the following algorithm:
1. Create a root node whose value is the maximum value in `nums`.
2. Recursively build the left subtree on the **subarray prefix** to the **left** of the maximum value.
3. Recursively build the right subtree on the **subarray suffix** to the **right** of the maximum value.

Return the **maximum binary tree** build from `nums`.

#### Solution

I had less trouble with this medium rated problem than some easy problems on Leetcode.

My solution is below. There's no trick here. Just follow the algorithm in the problem statement.

```python
class Solution(object):
    def constructMax(self, nums):
        if not nums:
            return
        max_val = max(nums)
        idx = nums.index(max_val)
        max_node = TreeNode(max_val)
        max_node.left = self.constructMax(nums[:idx])
        max_node.right = self.constructMax(nums[idx + 1:])
        return max_node
```

[Leetcode submission](https://leetcode.com/submissions/detail/523277365/)


