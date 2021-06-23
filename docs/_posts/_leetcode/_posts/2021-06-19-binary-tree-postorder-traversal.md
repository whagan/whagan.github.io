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

With a `preorder` traversal, at every node, the right child is pushed before the the left. For a binary tree, in which during each iteration at most only two nodes are pushed onto the stack and one node is popped, this results in the stack always containing no more than one right child element.

Yeah... that sounds right...?

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def preorderTraversal(self, root):
        if root is None:
            return
        stack, order = [], []
        stack.append(root)
        while stack:
            root = stack.pop()
            order.append(root.val)
            if root.right is not None:
                stack.append(root.right)
            if root.left is not None:
                stack.append(root.left)
        return order

```
[Leetcode submission](https://leetcode.com/submissions/detail/512212840/)


