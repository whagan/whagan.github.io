---
layout: post
title: "Binary Tree Inorder Traversal"
date: 2021-06-17 12:00:00 -0000
categories: leetcode easy algorithms binary-tree binary-tree-inorder 
---

### LeetCode

**Problem 94 Binary Tree Traversal**

Given the `root` of a binary tree, return the *inorder traversal of its nodes' values*.

#### Solution

I first attempted to find a recursive solution. The trick with a recursive solution is to use a helper function to maintain a list for return.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def __init__(self):
        self.ret_list = []
    def inorderTraversal(self, root):
        if root is None:
            return
        self.inorderTraversal(root.left)
        self.ret_list.append(root.val)
        self.inorderTraversal(root.right)
        return self.ret_list
```

[Leetcode submission](https://leetcode.com/submissions/detail/511733354/)


