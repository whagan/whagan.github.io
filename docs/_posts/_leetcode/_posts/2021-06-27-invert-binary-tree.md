---
layout: post
title: "Invert Binary Tree"
date: 2021-06-27 12:00:00 -0000
categories: leetcode easy algorithms binary-tree recursion
---

**Problem 226**

Given the `root` of a binary tree, invert the tree and returns **its** `root`.

#### Solution

Recursive solution:

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
     def invertTree(self, root):
        curr = root
        def invert(curr):
            if not curr:
                return
            temp = curr.left
            curr.left = curr.right
            curr.right = temp
            invert(curr.left)
            invert(curr.right)
        invert(curr)
        return root
```

[Leetcode submission](https://leetcode.com/submissions/detail/521398622/)



