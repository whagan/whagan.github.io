---
layout: post
title: "Binary Tree Paths"
date: 2021-06-20 12:00:00 -0000
categories: leetcode easy algorithms binary-tree 
---

### LeetCode

**Problem 257 Binary Tree Paths**

Given the `root` of a binary tree, return *all root-to-leaf paths in any **order***.

#### Solution

My solution feels a bit messy.

Surely there exists a solution with only two structures instead of three (`stack`, `visited`, `paths`).

Also, I set the new `curr` value to the last element of `stack`, but I also pop `stack`. This feels redudant, and I wonder if there exists a solution where `stack` is merely popped.

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def binaryTreePaths(self, root, val):
        if root is None:
            return
        stack = []
        visited = []
        paths = []
        stack.append(root)
        while stack:
            curr = stack[-1]
            if curr.left and curr.left not in visited:
                curr = curr.left
                stack.append(curr)
            elif curr.right and curr.right not in visited:
                curr = curr.right
                stack.append(curr)
            else:
                if not curr.left and not curr.right:
                    path = [node.val for node in stack]
                    paths.append('->'.join(map(str, path)))
                visited.append(curr)
                stack.pop()
        return paths
```

[Leetcode submission](https://leetcode.com/submissions/detail/518901419/)



