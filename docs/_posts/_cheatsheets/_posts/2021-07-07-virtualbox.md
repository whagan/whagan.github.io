---
layout: post
title: "July 07 2021"
date: 2021-07-07 12:00:00 -0000
categories: cheatsheets set-up virtualbox centos
---

#### CentOS in VirtualBox

In preparation for the RHCSA, I'm setting up a virtual machine for Red Hat using VirtualBox. I'm using a free copy of the discontinued CentOS distribution (I had given some thought to trying out the CLoudLinux OS - perhaps next time).

[Sander Van Vugt's videos and book](https://www.sandervanvugt.com/) are exceptional resources. I highly recommend them.

Here are the steps to setting up Van Vugt's machine:
1. Extract the labipa-ova files.
2. Edit the `.ovf` file so that all instances of `ElementName` are replaced with `Caption`.
3. Check for the line `vmware.sata.haci`. It may not be present.
4. Save the file.
5. Run `shasum` on the `.ovf` and `.vmdk` files. Copy these values into the `labipa\ 3.0.mf` file.
6. From VirtualBox, select `File -> Import Appliance` and browse to the `.ovf` file. Select it.
7. The preset Appliance settings will probably work just fine.
8. Start the virtual machine (which for Van Vugt, should be titled `vm`).
9. Log in and open terminal.
10. Ping **8.8.8.8** to verify network connection.
11. If not connected, go `VirtualBox VM -> Preferences -> Network -> Add new NAT network -> Network Name: NatNetwork -> Network CIDR: 192.168.4.0/24`.
12. Power down virtual machine.
13. Go to VirtualBox `Settings -> Network -> Attached to: Nat Network -> Name: NatNetwork (or whatever)`.
14. Power back up and verify connection.

Questions:
1. What is an `.ovf` file?
2. What is a `.vmdk` file?
3. Explain the `shasum` command.

