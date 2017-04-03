---
layout: post
title:  "Digital Ocean에 Cloud Flare로 https 쉽게 설정하기"
date:   2017-04-04 09:41:00
categories: web, https, digitalocean
---

최근 프로젝트에서 간단한 서버사이드와 통신을 하는 부분이 있었는데 애플쪽에서 통신관련된 부분에서 스펙을 https로 요구하고 있어서 고민하고 있던도중 @haruair 님의 조언으로 가장 간단한 방법은 [Cloud Flare](https://www.cloudflare.com/)로 연결해주는 방법이라고 알려주셔서 적용해보았다.

엄청 간단하게 다른 추가작업이 필요없이 `https`를 적용할수 있고 단지 `https`만 필요한 것이라면 무료로 이용이 가능하다.

내가 작업했던 환경은
* [Digital Ocean](https://www.digitalocean.com/)
* Node.js 

정도였다.

절차를 간략하게 설명하면

#### *Cloud Flare 에서*

1. [Cloud Flare](https://www.cloudflare.com/)에 가입하고 `https`를 적용할 도메인을 입력 하면 
2. 알아서 도메인의 네임서버를 분석해서 어떤 값으로 교체하라는 화면이 친절하게 나온다.
3. 도메인을 사용하는 서비스로 가서 네임서버를 바꿔준다.
4. 메뉴에 DNS를 들어가 `DNS Records` 에서 아래와 같이 입력해준다. {} 안은 해당하는 값으로 넣어준다.
  * A    {#DOMAIN_NAME#}    {#SERVER_IP_ADDRESS#}
  * CNAME www    {#DOMAIN_NAME#} 
5. 메뉴에  Crypto를 들어가 SSL을 `Flexible` 로 바꿔준다.

#### *Server 에서*
1. Node.js 서버를 80포트로 서비스해준다.


이제 약 1~2시간 정도 기다려주면 https로 접속해볼수 있다.

일반적인 https를 적용하는 것이라면 SSL인증서를 받아서 서버안에서 많은 작업들을 해줘야 하는데 
Cloud Flare는 이 절차들을 엄청나게 간소화 시켜주었다. 네임서버만 변경해서 도메인과 서버의 중간에서 Cloud Flare의 SSL을 통해 https의 혜택을 받는것이다.

이제 다른사람이 간단히 https를 이용할 것을 찾는다면 Cloud Flare를 추천한다.
