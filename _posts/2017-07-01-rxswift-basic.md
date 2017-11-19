---
layout: post
title:  "[RxSwift] RxSwift 를 프로젝트에 사용하게 된지 2주가 되었다."
date:   2017-07-01 09:41:00
categories: iOS
tags: xcode, rxswift
description: "RxSwift 를 프로젝트에 사용하고 느낀점"
---

Rx 를 공부한지는 2달정도 전 부터 였던것 같다. 현재 하고 있는 iOS 프로젝트를 위해 공부한다는 생각을 하고 RxSwift 로 자료를 찾아봤다. 

처음엔 [공식 Github Repository](https://github.com/ReactiveX/RxSwift/) 에 가서 설치를 하고 따라해보았다. 

생각보다 어렵진 않았던것 같은데 이걸 어떻게 모든곳에 적용해야 하는지 잘 감이 오지 않았다. 그렇게 이해 해보려고 노력을 하다가 첫커브를 오르기가 쉽지 않아 잠깐 쉬어버렸다. 그리고 나중에 다시 보니 조금 더 이해가 되는 느낌이었다. 그렇게 몇번을 반복했다. 많은 토이프로젝트를 만들어서 생각해본대로 이렇게 저렇게 만들어 보기를 해보니 UI는 이미 다 구현이 되어있어서 Rx로 구현하는게 어렵지 않아졌다.

여기까지 오는데 한달이 조금넘게 걸린것 같다. 알듯 말듯 한 이해들이 나를 더 복잡하게 만들기도 했는데 그럴때 마다 다른 사람들이 만들어 놓은 RxSwift 프로젝트들을 보고 정리를 했다. (Github 에서 RxSwift 로 작성한 프로젝트를 오픈한 레포들이 많다.) 

Observer 의 구현체들이 몇개 있는데 무엇이 다른지 이해하려면 Hot, Cold 라는 개념을 정리하면, 사용하기 조금 쉬워지는데 상황에 맞게 적절히 사용하기 위해 꼭 알아야 하는 개념이다.

이미 UI에 대한 구현은 다 되어있어서 프로젝트에 적용하기 시작했다. 가장 단순한 화면부터 Rx로 바꾸었다.
View가 Observer 이고 Subscript 를 바인딩하는게 처음엔 어색했지만 나중엔 이해도되고 코딩 속도도붙어서 전부는 아니지만 대부분 Rx 로 바꿨다.

조금 복잡한 구현이 되어있는곳은 많은 곳을 손대야 해서 손대기 어려웠지만 많이 복잡하지 않은 곳은 Operator를 적용해 가며 데이터를 가공하고 처리하기 시작했다. Rx의 높은 러닝커브의 이유중 하나가 수많은 Operator 들인데 비슷한 이름들이 많고 단순히 데이터를 처리하는 것이 아니라 Memory safty 를 위해 어떠한 처리를 해주는 것까지 알아야 하는게 좀 난관이다. 처음엔 그림으로 설명을 많이 해주는것이 이해가 잘 되지 않았었는데 Operator 특징을 알아가면서 이해가 되었다.

---

RxSwift 에 대해 아직 공부해야 할 것들이 많이 남아있지만 쉬운것부터 프로젝트에 적용하면서 익히는것이 좋을 것 같다는 생각이 들어서 시작하게 되었다. 프로젝트는 혼자 하고 있는 것이라 쉽게 적용해볼 수 있었다. Rx 브랜치를 새로 만들어서 그곳에서만 따로 Rx 로 구현된 코드를 관리했다. 

UI 에 코드를 작성하면서 반복작업을 하다보니 [Snippet](https://github.com/ul7290/RxSwiftSnippets) 을 작성하였다. UI에 관련된 작은 코드들 이지만 생각보다 rx 코딩하는게 짧진 않아서 항상 헷갈리는 코드를 빠르게 작성 할 수 있다.


[RxSwiftSnippets Github Link](https://github.com/ul7290/RxSwiftSnippets)

Links

[https://github.com/LeoMobileDeveloper/awesome-rxswift](https://github.com/LeoMobileDeveloper/awesome-rxswift) 
[https://github.com/DroidsOnRoids/RxSwiftExamples](https://github.com/DroidsOnRoids/RxSwiftExamples)
