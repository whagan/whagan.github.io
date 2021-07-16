---
layout: post
title: "Balanced Binary Tree"
date: 2021-06-29 12:00:00 -0000
categories: leetcode easy algorithms binary-tree
---

**Problem 110**

Given a binary tree, determine if it is height- balanced.

For this problem, a height-balanced binary tree is defined as *a binary tree in which the left and right subtrees of every node differ in height by no more than 1*.

#### Solution

Cheated on this and peeked at discussion. [This](https://leetcode.com/problems/balanced-binary-tree/discuss/35912/Simple-Fast-Python-Recursive-Solution) solution by [softray](https://leetcode.com/softray/) caught my eye.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def __init__(self, balanced=None):
        self.balanced = True
    def isBalanced(self, root):
        def dfs(node):
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            print(abs(left - right))
            if abs(left - right) > 1:
                self.balanced = False
            return max(left, right) + 1
        dfs(root)
        return self.balanced
```

[Leetcode submission](https://leetcode.com/submissions/detail/523257432/)


