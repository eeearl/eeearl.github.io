---
layout: post
title:  "Jekyll 설치"
date:   2016-04-15 12:38:00
categories: Jekyll
---

지금 사용하고 있는 블로그의 엔진은 Jekyll을 사용하고 있는데 Github에서 제공하는 호스팅을 사용하고 있다. 블로그를 운영하기에 큰 제약사항이 없고 편하게 사용하기 좋아 사용하는데 로컬에서 블로그를 구동하려면 몇가지 요구조건을 맞춰서 설치를 해야한다.

`Mac 환경에서 작업을 했다.`

  1. Ruby 버전 확인
    - 터미널을 실행한다.
    - 'ruby --version' 명령어로 버전을 확인한다.
    - 2.0.0 또는 그 이상 버전이면 로컬에서 Jekyll을 동작시킬 수 있다.

  2. bundler 설치
  	- `gem install bundler` 명령어로 bundler 패키지를 설치한다.
  	- 퍼미션 요구로 설치가 안된다면 sudo 명령어로 설치.

  3. 블로그로 사용할 git repository를 생성한다.
    - 'git init my-jekyll-blog-name'

  4. Jekyll 설치
    - git repository의 root directory로 가서 'Gemfile' 이라는 이름의 파일에 아래 내용을 입력한다.
    `
    source 'https://rubygems.org'
	gem 'github-pages', group: :jekyll_plugins
	`
	- `bundle install` 을 실행하면 Jekyll이 설치가 된다.
  
  * Exception
    - ERROR: Failed to build gem native extension.
     이런 에러가 난다면 
     `xcode-select --install`

     을 설치하면 해결된다.

  5. `bundle exec jekyll serve` 로 로컬에서 블로그를 실행할 수 있다.

  **Jekyll 의 테마**

  jekyll wiki에 여러가지 theme 이 올라와있다.

  * Themes
    - [https://github.com/jekyll/jekyll/wiki/themes](https://github.com/jekyll/jekyll/wiki/themes)