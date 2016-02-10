---
layout: post
title:  "[RaspberryPi] 라즈베리파이 라즈비언(OS) 설치"
date:   2015-04-01 00:00:00
categories: RaspberryPi
tags: raspberrypi, raspbian
---
# 라즈비언 (Raspbian) 설치

## 준비
  - 컴퓨터 (맥이라면 윈도우즈가 설치된 가상머신 필요)
  - 마이크로 SD카드 (8GB) + USB리더기
  - 라즈베리파이 2 MODEL B

## SD카드 파일포멧 (FAT32)


## 파일 다운로드
맥에서 파일을 다운로드받고 SD카드에 쓰려면 윈도우 운영체제가 필요했다. 그래서 VMWare 나 VirtualBox 같은 가상머신에 윈도우즈를 설치한 후 사용했다.

필요한 파일은 ***라즈비언 이미지 파일*** 과 ***Win32 Disk Imager*** 라는 프로그램 2가지가 필요하다.

  - [Raspbian Download](http://downloads.raspberrypi.org/raspbian_latest)
  - [Win32DiskImager Download](http://sourceforge.net/projects/win32diskimager/files/latest/download)

다운로드를 하고 두파일 모두 압축을 풀면된다.

## 설치
마이크로 SD카드를 꽂은 USB리더기를 꽂은 후, 
Win32DiskImager.exe 파일을 실행하면 작은 창이 하나 뜬다. Image File에 폴더 아이콘을 눌러서 3기가 정도 되는 라브비언 이미지 파일을 선택하면 된다. 
그리고
Write 버튼을 누르면 설치가 시작된다.

#### * 맥환경에서도 이미지 파일을 쓸수있네요!
  [http://elinux.org/RPi_Easy_SD_Card_Setup](http://elinux.org/RPi_Easy_SD_Card_Setup) 참고하면 될것 같습니다.