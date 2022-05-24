---
layout: post
title: Setup Raspberry Pi without Monitor (Headless) from Mac
subtitle: How to setup a raspberry pi without a monitor, keyboard or mouse.
date: 2021-02-11 10:45:13 -0400
background: "/img/posts/06.jpg"
categories:
  - Ressources
tags:
  - Free Things
---

How to setup a raspberry pi without a monitor, keyboard or mouse.

This quick tutorial will show you how to download and install Raspbian OS in your memory card, then configure everything (including Wifi) entirely from your mac. So when you turn on your raspberry, you can directly connect to it and control it remotely.

We call headless setup a computer (Raspberry Pi) that is setup to work without monitor or mouse or keyboard.

## Download and install Raspberry Pi OS

You no longer have to download the image and install it manually. Instead, you just download Raspberry Pi Imager from this link and install it.

{% asset_img HeadlessRaspberry-1.webp %}

Select an operating system ( I used Raspberry Pi OS), an SD Card and click write.

{% asset_img HeadlessRaspberry-2.webp %}

You now have Raspberry Pi OS installed and can insert it in your raspberry if you have a keyboard and a monitor. If not, keep following along.

## Enable Wifi, SSH and VNC

Now we want the raspberry to automatically connect to wifi and enable ssh so we can control it from our computer.

Assuming the mounted memory card is called “boot” (which is the default).

Open a terminal and run the following:

```bash
touch /Volumes/boot/ssh
```

This will create an empty file called ssh which will tell the raspberry to enable remote control when it boots.

Then to automatically connect to your wifi, run:

sudo nano /Volumes/boot/wpa_supplicant.conf
This will open an editor where you past this:

```bash
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1network={
ssid=”NETWORK-NAME”
psk=”NETWORK-PASSWORD”
}
```

The SSID is the name of your network and PSK is the password. Also change the coutry depending on where you are.

Press control + y to save and quit nano.

This will create an empty file called ssh which will tell the raspberry to enable remote control when it boots.

## First connection to the Raspberry Pi

Open a terminal and run:

```bash
ssh pi@raspberrypi.local
```

Ignore the warning that happens the first time you connect to a device and you are in.

The first thing you should do is run these commands that will update and upgrade everything:

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt dist-upgrade -y
```

It might take a while…

Now you have access to the terminal and everything is up to date. For some people it is enough.

But if you want to actually see the raspberry desktop in you computer, you can enable VNC in the following way:

## Enabling VNC to gain visual access

In the same terminal, type:

```bash
sudo raspi-config
```

{% asset_img HeadlessRaspberry-3.webp %}

- Select “Interface Options”
- Click on VNC
- Click on YES
- Select Finish

Now that VNC is enabled on the Raspberry, we need to install a client on our Mac.

I chose VNC Viewer. You can get it here.

As before, the adress is raspberrypi.local, the default username is pi and the default password is raspberry.

{% asset_img HeadlessRaspberry-4.webp %}

After being guided through some useful configuration steps, such as changing the default password, you have arrived:

{% asset_img HeadlessRaspberry-5.webp %}
