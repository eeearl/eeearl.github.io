---
layout: post
title:  "[VirtualBox] 버츄얼박스 리눅스에 ssh 로 접속하기"
date:   "2014-10-12T00:00:00"
path: "/2014-10-12-connect-virtualbox-linux-using-ssh"
categories: Linux
---

  **버추얼박스 버전은 4.3.10,  
  리눅스는 ubuntu 14.04 LTS 를 사용했다.**

  1. ssh를 외부에서 사용하려면 openssh-server 를 설치한다.  
  `sudo apt-get install openssh-server`

  2. `ifconfig` 명령어로 IP Address 를 확인한다.  

  3. 가상머신의 메뉴에서 Network 설정을 바꾼다. 기본은 NAT으로 되어있다.
  `Machine - Setting - Network` 로 가서
  `Attrached to` 의 `NAT`을 `Bridged Adapter` 로 변경한다.

  4. 호스트 OS에서 확인한 IP Address 로 접속한다.  
  `ssh ubuntu@192.168.10.1`

