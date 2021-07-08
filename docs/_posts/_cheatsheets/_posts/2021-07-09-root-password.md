---
layout: post
title: "Resetting root Password"
date: 2021-07-09 12:00:00 -0000
categories: cheatsheets reset linux grub root password
---

#### Resetting the root password

[Sander Van Vugt's videos and book](https://www.sandervanvugt.com/) are exceptional resources. I highly recommend them and I credit him with these instructions.

Resetting root password:
1. On system boot, press **e** when the GRUB 2 boot menu is shown.
2. Enter **rd.break** as a boot argument to the line that loads the kernel. This line will start with either **linux** or **linux16**.
3. Press **Ctrl-X** to boot with this option.
4. This boots to a rescue prompt that looks like **switch_root:/#**.
5. Remount the root partition in read-write mode so you can run commands. Enter **mount -o remount,rw /sysroot**. Hit enter.
6. Enter **chroot /sysroot**. Hit enter. This will make the contents of the /sysimage directory the new root directory.
7. Change password for **root** by using the **passwd** command. Since you're already **root**, just type **passwd**.
8. You must be sure that SELinux allows the file changes. At prompt, enter **touch / .autorelabel**. This signals SELinux on next reboot that file system has changed. You may also enter **load_policy -i**.
9. You may manually set the correct context type to /etc/shadow. Enter **chcon -t shadow_t /etc/shadow**.
10. Enter **exit** to leave chroot environment and then enter **reboot**. (Reboot may take a bit longer.)
11. Log in with new password.


