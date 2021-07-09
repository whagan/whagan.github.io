---
layout: post
title: "AlmaLinux Install"
date: 2021-07-08 12:00:00 -0000
categories: cheatsheets installation almalinux centos
---

In preparation for the RHCSA, I am running through an install of CentOS. But I decided to use a recent version of AlmaLinux since CentOS has been discontinued.

Recommended Requirements:
* 2 GiB RAM
* 20 GiB hard disk
* 64-bit architecture

Minimum Requirements:
* 1 GiB of RAM
* 40 GiB hard disk
* 64-bit architecture

The boot menu offers the following options:
* **Install AlmaLinux <version>**
* **Test This Media & Install AlmaLinux <version>**
* **Troubleshooting**

The Installation Summary screen offers the following configuration settings: **Keyboard**, **Language Support**, **Time & Date**, **Installation Source**, **Software Selection**, **Installation Destination**, **KDUMP**, **Network & Host Name**, **Security Policy**, and **System Purpose**. Most of this is self-explanatory, but **Installation Destination**, **Network & Host Name**, and **Software Selection** are interesting.

I'll save **Network & Host Name** and **Software Selection** for another entry, and instead focus on **Installation Destination**.

[Van Vugt](https://www.sandervanvugt.com/) recommends using the Logical Volume Manager (LVM) rather than default partitioning. 

The following **Mount Point** configurations are recommended:
* **/boot** - **500 MiB** - **Standard** device type - **ext4** file system
* **/** - **10 GiB** - **LVM** device type - **xfs** file system
* **swap** - **1 GiB** - **Standard** device type - **swap** file system