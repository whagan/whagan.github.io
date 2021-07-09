---
layout: post
title: "Univalued Binary Tree"
date: 2021-06-26 12:00:00 -0000
categories: leetcode easy algorithms binary-tree recursion
---

**Problem 965**

A binary tree is *univalued* if every node in the tree has the same value.

Return `true` if and only if the given tree is univalued.

#### Solution

The following is my iterative solution:

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def isUnivalTree(self, root):
        value = root.val
        stack = [root]
        while stack:
            node = stack.pop()
            if node.val is not value:
                return False
            if node.left: stack.append(node.left)
            if node.right: stack.append(node.right)
        return True
```

[Leetcode submission](https://leetcode.com/submissions/detail/519853298/)

And here is my recursive solution:

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def __init__(self, univ=None):
        self.univ = True
    def isUnivalTree(self, root):
        if not root:
            return
        if root.left:
            if root.val is not root.left.val:
                self.univ = False
        if root.right:
            if root.val is not root.right.val:
                self.univ = False
        self.isUnivalTree(root.left)
        self.isUnivalTree(root.right)
        return self.univ       
```
[Leetcode submission](https://leetcode.com/submissions/detail/519866865/)


