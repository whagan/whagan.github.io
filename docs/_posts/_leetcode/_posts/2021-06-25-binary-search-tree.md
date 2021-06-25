---
layout: post
title: "Binary Search Tree"
date: 2021-06-18 12:00:00 -0000
categories: leetcode easy algorithms binary-search-tree 
---

### LeetCode

**Problem 700 Search in a Binary Search Tree**

Given the `root` of a binary search tree and an integer `val`, find the node in the binary search tree whose value is equal to `val` and return the subtree rooted with that node. If the node does not exist, return `null`.

#### Solution

Search in a binary search tree is straightforward. 

Notice that each `if-else` statement contains a `return` statement for this recursive function.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def searchBST(self, root, val):
        if not root:
            return
        if root.val == val:
            return root
        elif root.val < val:
            return self.searchBST(root.right, val)
        else: return self.searchBST(root.left, val)
```

[Leetcode submission](https://leetcode.com/submissions/detail/513097647/)

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def searchBST(self, root, val):
        while root:
            if root.val < val:
                root = root.right
            elif root.val > val:
                root = root.left
            else:
                return root
        return None
```
[Leetcode submission](https://leetcode.com/submissions/detail/513111674/)


