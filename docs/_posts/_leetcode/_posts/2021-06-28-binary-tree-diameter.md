---
layout: post
title: "Diameter of Binary Tree"
date: 2021-06-28 12:00:00 -0000
categories: leetcode easy algorithms binary-tree
---

**Problem 543**

Given the `root` of a binary tree, return the length of the **diameter** of the tree.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

#### Solution

Pay special attention to *This path may or may not pass through the root* because my first attempt failed for this reason. I did not read carefully and assumed the longest path must by necessity pass through `root`.

Also, there must surely be a more elegant solution than mine:

```python
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
     def diameterOfBinaryTree(self, root):
        def diameter(node):
            if not node:
                return 0
            depth = 1
            stack = []
            stack.append((node, depth))
            while stack:
                node, depth = stack.pop(0)
                if node.left:
                    stack.append((node.left, depth + 1))
                if node.right:
                    stack.append((node.right, depth + 1))
            return depth
        depths = []
        stack = []
        stack.append(root)
        while stack:
            node = stack.pop(0)
            depths.append(diameter(node.left) + diameter(node.right))
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)   
        return max(depths)
```

[Leetcode submission](https://leetcode.com/submissions/detail/521487976/)

[This](https://leetcode.com/problems/diameter-of-binary-tree/discuss/1065778/Python-Elegant-solution-return-tuple-(longestPath-longestDiameter)) submission by [DynamicStardust](https://leetcode.com/DynamicStardust/) features an interesting insight: 

The maximum diameter of any node is the maximum of 3 things:
1. The sum of the longest paths of both left and right sub-trees.
2. The maximum diameter of left sub-tree.
3. The maximum diameter of right sub-tree.

