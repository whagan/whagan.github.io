---
layout: post
title: "Running Sum"
date: 2021-06-14 12:00:00 -0000
categories: leetcode easy algorithms epi running-sum
---

### Leetcode

**Problem 1480 Running Sum of 1d Array** 

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0], ..., nums[i])`.

Return the running sum of `nums`.

#### Solution

Straightforward. For complexity sake, just be sure to cache the current running sum so that it can be added in the next iteration.

[Leetcode submission](https://leetcode.com/submissions/detail/508093914/)

