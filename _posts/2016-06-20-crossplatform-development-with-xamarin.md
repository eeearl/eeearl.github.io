---
layout: post
title:  "Xamarin 으로 크로스플랫폼 개발"
date:   "2016-06-20T12:38:00"
path: "/2016-06-20-crossplatform-development-with-xamarin"
categories: Xamarin
---

#### *이상한모임에서 발표했던 자료로 정리된 포스팅을 올립니다.*

Xamarin 은 2011년 부터 창립된 모노 프로젝트를 기반으로 한 모바일 크로스 플랫폼 개발 플랫폼이다. 웹뷰를 기반으로 하는 크로스 플랫폼 개발과는 다르게 C#으로 작성한 코드를 모노 프레임워크를 통해 네이티브 코드로 변환을 해서 빌드를 한다. React Native와 같은 방식인데 아직 정식버전이 나오지 않았지만 Xamarin은 정식으로 나온지 꽤 오래되었고 지금까지 관련된 툴과 서비스들이 출시되었다. 

최근엔 MS가 Xamarin을 인수하면서 엄청난 지지를 받으며 MS가 추구하고 있는 크로스 플랫폼 개발에 역할을 제대로 하고 있다. 

개인적으론 크로스 플랫폼 개발에 대해서 부정적인 생각이 더욱 많아 추천하지 않는 편인데 그 이유는 장기적인 유지보수와, 개발에 걸리는 (문제를 해결하는데 걸리는) 시간이다. 같은 코드로 여러가지 플렛폼을 지원할 수 있다는 것은 굉장한 장점이다. 하지만 정말 같은 코드로 모든 문제를 해결할 수 있을까? 특히 안드로이드 같은 경우는 안드로이드 폰을 제조하는 회사마다 사양이 각각 다르고 OS에 따라 디바이스에 따라 조금씩 버그와 빌드버전이 다르다. 그에 따라 발생하는 이슈들은 이슈마다 해결방법이 다르겠지만 공통된 문제가 아닌 특정 기기의 문제를 수정해야 하는문제가 발생한다면 여기서부터 크로스 플랫폼의 의미는 달라진다고 생각된다.

예전에 웹뷰를 랩핑해서 개발하는 크로스 플랫폼이었다면 페이스북에서 개발중인 ReactNative와 Xamarin은 완전히 다르다. 네이티브 코드로 직접 변환해 준다는 것으로 웹뷰기반의 크로스플랫폼과는 전혀다른 퍼포먼스로 네이티브로 제작된 앱과 차이가 거의 없이 결과물을 낼수 있다.

특히 Xamarin은 Xamarin.form 이라는 공통UI를 제공하는데 특별히 커스터마이즈된 UI가 필요하지 않다면 이것으로 기본제공되는 UI들을 빠르게 개발할수 있고 UI와 로직부분을 완전히 공유하는 코드로 작성할 수 있다.

만약 특정 기기별로 개발을 다르게 가야한다면 로직부분만 공유하는 공통프로젝트(Shared)를 만들고 각각의 플랫폼별로 따로 개발하는 방법도 가능하다.

IDE는 맥과 윈도우에서 개발하는 환경을 모두 제공하지만 개인적으로는 윈도우에서 Visual Studio와 함께 개발하는 방법을 추천한다. 그리고 아이폰 빌드의 경우 맥이 필요한데 리모트로 빌드가 가능하다. 

마지막으로 Xamarin에서 강점이라고 생각하는 것은 테스트인데 Cloud Test 를 제공한다. 모든 디바이스를 가지고 있지 않더라도 Cloud Test를 이용해 가상으로 모든 디바이스를 테스트 할 수 있다. 
이 테스트에서는 UI 테스트가 가능한데 터치 시나리오를 만들어서 모든테스트에서 UI가 테스트 가능하다. 그리고 실패한 테스트와 일부 테스트를 실패한 기기별로 리포트를 작성해준다. 유료서비스 이지만 가입후 몇일동안 무료로 테스트를 가능하게 해주니 관심이 있다면 무료로 해보는것도 좋을듯하다.

아래는 이상한모임에서 발표한 슬라이드이다.

<div style="text-align: center;"><iframe src="//www.slideshare.net/slideshow/embed_code/key/zA4yvFmp840Lqw" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/HanulPark3/weirdmeetup-xamarinpresentation" title="Weirdmeetup xamarin-presentation" target="_blank">Weirdmeetup xamarin-presentation</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/HanulPark3">Hanul Park</a></strong> </div><div>

