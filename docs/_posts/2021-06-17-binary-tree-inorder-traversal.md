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

We'll walk through the iterative algorithm. 

Starting with the given root, push all left descendants onto a stack. Notice that in the algorithm below, within the `while` statement, the `if` statement executes until every left descendant of `root` is pushed onto the stack.

At this point, the stack is populated and root is `None` (since there are no more left descendants). That is to say, the algorithm will not begin pushing onto `order` until after root is `None` the first time.



```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        stack, order = [], []
        while stack or root is not None:
            if root is not None:
                stack.append(root)
                root = root.left
            else:
                root = stack.pop()
                order.append(root.val)
                root = root.right
        return order

```
[Leetcode submission](https://leetcode.com/submissions/detail/511783767/)


