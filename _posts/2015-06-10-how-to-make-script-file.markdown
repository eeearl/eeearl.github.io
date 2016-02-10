---
layout: post
title:  "[Linux/Ubuntu] 리눅스 스크립트 파일 만들기"
date:   2015-06-10 00:00:00
categories: Linux
---

  리눅스 환경의 작업을 할때 명령을 순서대로 반복하는 경우가 많아서
  스크립트 파일을 만들어 놓으면 유용하게 쓸수있다.

  vim이나 nano를 이용해 파일을 만든다음 최상단에
  `#!/bin/bash` 을 넣고
  순서대로 명령을 한줄씩 넣는다.

  예를 들어 Aapche, php, mysql을 설치한다고 하면

  `#!/bin/bash

  apt-get update
  apt-get upgrade
  apt-get install apache2
  apt-get install php5 php5-mysql phpmyadmin
  apt-get install mysql-server mysql-client
  service apache2 restart
  `

이렇게 만들고 `scriptfile.sh`이라는 이름으로 저장한 후에
파일을 실행가능한 파일로 설정한다.

`chmod +x scriptfile.sh`

`> ./scriptfile.sh` 

을 하면 실행된다.