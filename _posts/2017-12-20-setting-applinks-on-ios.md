---
layout: post
title:  "[iOS] Facebook Applinks 적용기"
date:   2017-12-20 09:41:00
categories: iOS
tags: xcode, 
description: "Facebook Applinks 를 적용하다가 알게된것들, 정리"
---

# Facebook Applinks 란
  iOS 에서 [Universal Links](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html) 의 개념과 같다. 
  
  즉, 다른 앱에서 링크의 서비스의 컨텐츠를 눌렀을 경우 해당 네이티브 앱의 그 컨텐츠가 담겨있는 화면으로 바로 갈수 있게 하는 것이다. 
  
  근데 페이스북(네이티브앱)에서 공유되어있는 컨텐츠를 눌렀을 경우, 앱 내에서 설정한 Universal Links가 동작이 되지 않는다. 그래서 Facebook 북에서 제공하는 [AppLinks](https://developers.facebook.com/docs/applinks/overview) 를 사용해서 Universal Links 처럼 동작시킬 수 있다.   

# Applinks 가 되기 위해 필요한 작업
  
  앱링크가 작동되기 위한 링크를 만드는 두가지 방법이 있다
  
  1. 해당 링크의 메타태그에 필요한 데이터들을 추가 (문서에 정리되어있다, [tool](https://developers.facebook.com/tools/debug/og/object/)로 미리 디버깅도 할 수 있다.)
  2. applinks 를 페북에서 생성
    - 링크자체를 만들면서 앱링크가 가능하게 페이스북 내에서 생성할 수 있다.
    - [앱 광고 지원도구](https://developers.facebook.com/tools/app-ads-helper) 에서 가장 아래의 개발자도구 탭에서 페이스북에서 생성하는 Deeplink를 테스트해 볼수 있다.

  공식 문서를 따라하면 어느정도 필요한 작업들을 거치기 때문에 기본적인 구현은 되지만, 나중에 앱에서 실행을 해보니 여전히 그냥 웹페이지로 넘어가고 있었다. 한참을 헤매다가 알아낸것은 오른쪽 위에 점이 세개 있는 버튼을 누르니 앱으로 바로 가는 옵션이 생겨있었다..

  문서에 보면 'should_fallback=false ... The iOS app link for your content will be sent to your app' 이라고 설명되어있다. should_fallback 의 기본값은 true여서 해당 링크의 메타태그에 false 로 명시를 해주지 않으면 페이스북 앱내에서 해당 앱으로 넘겨주는 동작을 하지 않는다. 그리고 히든메뉴로 앱을 이동하게끔 해준다.

  ```<meta property="al:web:should_fallback" content="false" />``` 

  위의 메타태그를 추가해주면 우리가 생각하는(?) 앱링크의 시나리오 대로 바로 앱으로 연결되는 모습이 보일 것 이다.
