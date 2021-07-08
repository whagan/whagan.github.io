---
layout: post
title: "Minimum Depth of Binary Tree"
date: 2021-06-23 12:00:00 -0000
categories: leetcode easy algorithms binary-tree min-depth
---

**Problem 111**

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

#### Solution

Easy peasy. The trick is to couple a `node`'s `depth` with the `node` itself. Remember, `depth` only increments after every node at that depth is processed. For a binary tree, the number of nodes at a particular depth may be 1, 2, 4, 8, etc. But `stack` only pops one element per iteration.  

```python
class Solution(object):
    def minDepth(self, root):
        if not root:
            return 0
        depth = 1
        stack = []
        stack.append((root, depth))
        while stack:
            node, depth = stack.pop(0)
            if not node.left and not node.right:
                return depth
            else:
                depth += 1
                if node.left: stack.append((node.left, depth))
                if node.right: stack.append((node.right, depth))
```

[Leetcode submission](https://leetcode.com/submissions/detail/519468781/)



