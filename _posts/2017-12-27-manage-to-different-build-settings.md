---
layout: post
title:  "[iOS] Xcode Build Configuration (빌드설정)"
date:   2017-12-20 09:41:00
categories: iOS
tags: xcode, 
description: "개발과 릴리즈의 환경변수를 분리하자"
---

빌드시 Staging, Release, Development 로 나누어서 빌드환경을 설정한 후 개발을 하게되면
코드상으로 관리하는것 보다 훨씬 깔끔하고 빌드 목적에 맞게 관리가 가능하다.

보통 URL, API Key 와 같은 것을 이용할때 쓰인다.

아래 링크에 잘 정리되어있다!

[https://www.appcoda.com/xcconfig-guide/](https://www.appcoda.com/xcconfig-guide/)[https://hackernoon.com/a-cleaner-way-to-organize-your-ios-debug-development-and-release-distributions-6b5eb6a48356](https://hackernoon.com/a-cleaner-way-to-organize-your-ios-debug-development-and-release-distributions-6b5eb6a48356)
