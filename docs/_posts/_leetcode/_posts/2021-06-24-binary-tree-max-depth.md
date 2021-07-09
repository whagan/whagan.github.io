---
layout: post
title: "Maximum Depth of Binary Tree"
date: 2021-06-24 12:00:00 -0000
categories: leetcode easy algorithms binary-tree max-depth
---

**Problem 104**

Given a binary tree, find its maximum depth.

A binary  tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

#### Solution

Here is my solution:

```python
class Solution(object):
    def maxDepth(self, root):
        if not root:
            return 0
        depth = 1
        max_depth = 1
        stack = []
        stack.append((root, depth))
        while stack:
            node, depth = stack.pop(0)
            if node.left: stack.append((node.left, depth + 1))
            if node.right: stack.append((node.right, depth + 1))
            max_depth = depth
        return max_depth
```

[Leetcode submission](https://leetcode.com/submissions/detail/519836125/)

After solving this, I checked out some other solutions and many of them are recursive. I liked [this](https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1214192/Python-one-liner) one-liner by [worker-bee](https://leetcode.com/worker-bee/):

```python
class Solution(object):
    def maxDepth(self, root: TreeNode) -> int:
        return 0 if not root else 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```



