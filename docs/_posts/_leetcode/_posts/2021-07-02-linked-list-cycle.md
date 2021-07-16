---
layout: post
title: "Linked List Cycle"
date: 2021-07-02 12:00:00 -0000
categories: leetcode easy algorithms linked-list
---

**Problem 141**

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

Return `True` *if there is a cycle in the linked list*. Otherwise, return `False`.

#### Solution

Straightforward solution. My first attempt is below:

```python
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution(object):
    def hasCycle(self, head):
        visited = []
        while head:
            if head in visited:
                return True
            visited.append(head)
            head = head.next
        return False
```

[Leetcode submission](https://leetcode.com/submissions/detail/523570184/)

However, this runtime is trash. So, checked out [this](https://leetcode.com/problems/linked-list-cycle/discuss/1088956/Destructively-Fast-Python-faster-than-99-O(n)-time-O(1)-space) solution by [vedaank](https://leetcode.com/vedaank/) and did much better with this:

```python
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution(object):
    def hasCycle(self, head):
        node = head
        while node:
            if node.val is None:
                return True
            node.val = None
            node = node.next
        return False
```

[Leetcode submission](https://leetcode.com/submissions/detail/523571860/)


