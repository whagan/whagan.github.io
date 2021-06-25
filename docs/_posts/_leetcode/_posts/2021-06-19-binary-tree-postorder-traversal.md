---
layout: post
title: "Binary Tree Postorder Traversal"
date: 2021-06-18 12:00:00 -0000
categories: leetcode easy algorithms binary-tree binary-tree-preorder 
---

### LeetCode

**Problem 145 Binary Tree Postorder Traversal**

Given the `root` of a binary tree, return the *postorder traversal of its nodes' values*.

#### Solution

I first worked on a recursive solution. Much like the `inorder` and `preorder` solutions, I used a helper function to maintain a list for return.

With `postorder` the node is *visit*ed after recursion on left and right.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def __init__(self, order=None):
        self.order = []
    def postorderTraversal(self, root):
        if root is None:
            return
        self.postorderTraversal(root.left)
        self.postorderTraversal(root.right)
        self.order.append(root.val)
        return self.order
```

[Leetcode submission](https://leetcode.com/submissions/detail/512232787/)

A few words on the iterative solution.

With a `postorder` traversal, each node is traversed left, then right, and finally *visit*ed. Check out [this video](https://www.youtube.com/watch?v=4zVdfkpcT6U) for a good, short explanation of postorder traversal.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def postorderTraversal(self, root):
        stack, order = [], []
        last = None
        while stack or root:
            if root is not None:
                stack.append(root)
                root = root.left
            else:
                peek = None
                if stack:
                    peek = stack[-1]
                if peek.right is not None and last is not peek.right:
                    root = peek.right
                else:
                    order.append(peek.val)
                    last = stack.pop()
        return order
```
[Leetcode submission](https://leetcode.com/submissions/detail/512239113/)


