---
layout: post
title: "Binary Tree Preorder Traversal"
date: 2021-06-18 12:00:00 -0000
categories: leetcode easy algorithms binary-tree binary-tree-preorder 
---

### LeetCode

**Problem 144 Binary Tree Preorder Traversal**

Given the `root` of a binary tree, return the *preorder traversal of its nodes' values*.

#### Solution

I first worked on a recursive solution. Much like the `inorder` solution, I used a helper function to maintain a list for return.

Also, the only real difference between `inorder` and `preorder` is at what juncture you *visit* the current node during recursion. With `inorder`, you *visit* after recursing the left elements and then finally recurse the right elements. With `preorder`, you *visit* the current node before recursing left and then right elements.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def __init__(self):
        self.ret_list = []
    def preorderTraversal(self, root):
        if root is None:
            return
        self.ret_list.append(root.val)
        self.preorderTraversal(root.left)
        self.preorderTraversal(root.right)
        return(self.ret_list)
```

[Leetcode submission](https://leetcode.com/submissions/detail/512208617/)

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


