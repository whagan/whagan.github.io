---
layout: post
title: "Azure - CentOS"
date: 2021-07-05 12:00:00 -0000
categories: cheatsheets set-up azure centos
---

In preparation for the RHCSA, I'm setting up an Azure virtual machine for CentOS from the Azure CLI.

The Microsoft documentation on this is actually quite good. [Here](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-cli) is a quickstart guide, and [here](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-manage-vm) is the start of a slightly more thorough guide.

Why do this? Two reasons: 
1. Everything seems to be moving towards the cloud.
2. It's much easier to experiment. I can create and tear down as many vms as my heart desires.

Let's create the virtual machine...

**AZ LOGIN**<br>
`az login`

**CREATE RESOURCE GROUP**<br>
`az group create --name <vm name> --location centralus`

**LIST IMAGES**<br>
`az vm image list -f CentOS`

**LIST ALL IMAGES**<br>
`az vm image list --all --offer CentOS --output table`

**CREATE VM**<br>
`az vm create --resource-group <resource group> --name <vm name> --image <urn> --admin-username <admin username> --generate-ssh-keys`

**LIST VM IPs**<br>
`az vm list-ip-addresses --resource-group <resource group> --name <centos>`

**SSH LOGON VM**<br>
`ssh <admin username>@<vm ip address>`

Typically, you'd leave it here, but for purposes of the RHCSA, I'll proceed with a GUI desktop installation.  [These](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/use-remote-desktop) instructions were helpful.

So, you're in the vm via ssh. Proceed as follows.

Start with updating the packages. <br>

**UPDATE PACKAGES**<br>
`sudo apt-get update`

Install and enable **xrdp**.

**INSTALL xrdp**<br>
`sudo apt-get -y install xrdp`

**ENABLE xrdp**<br>
`sudo service xrdp restart`

IMPORTANT! SSH connection only requires key-based authentication. This is how the vm is accessed without a password from the terminal. However, **xrdp** does not accept SSH keys for authentication. That's why you need to grant a password to **\<admin username\>**.

**GRANT PASSWORD**<br>
`sudo passwd <admin username>`

Now, we install the desktop and set the graphical target as default.

**GNOME INSTALL**<br>
`yum groupinstall "GNOME Desktop" "Graphical Administration Tools"`

**SET AS DEFAULT**<br>
`sudo systemctl set-default graphical.target`

I believe the command above is equivalent to removing the symlink from **/etc/systemd/system/default.target** and creating a new symlink from **/etc/systemd/system/default.target** to **/usr/lib/systemd/system/graphical.target**.

Now, reboot the vm.

From Azure CLI, open the vm port (probably 3389) for a remote desktop.

**OPEN RDP PORT**<br>
`az vm open-port --resource-group <resource group> --name <vm name> --port 3389`

Now, from Windows, you may connect via Remote Desktop Connection.