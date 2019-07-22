---
layout: post
title:  "[iOS] 코드로 Autolayout 적용하기 (Swift로 하는 autolayout) - 3"
date:   "2014-10-06T00:00:00"
path: "/2014-10-06-ios-autolayout-with-swift-3"
categories: iOS
---
# 코드로 Autolayout 적용하기 (Swift로 하는 autolayout) - 3

Swift로 [Autolayout 적용하기 (코드로 하는 autolayout) - 2]({{ site.url }}/ios-autolayout-with-swift-2) 에서는 다른 뷰의 위치와 관련되서 배치하는 방법으로 적용해 보았다. 이번에는 뷰에 관계되어 정렬하는 방법을 사용해서 적용해본다.

```swift

// 파란뷰 생성
var blueView: UIView = UIView()
blueView.setTranslatesAutoresizingMaskIntoConstraints(false)
blueView.backgroundColor = UIColor(red: 0.0, green: 0.0, blue: 1.0, alpha: 1.0)

var redView: UIView = UIView()
redView.setTranslatesAutoresizingMaskIntoConstraints(false)
redView.backgroundColor = UIColor(red:1.0, green:0.0, blue: 0.0, alpha: 1.0)

// 뷰에 추가
self.view.addSubview(blueView)
self.view.addSubview(redView)

// 뷰 딕셔너리 생성
let viewsDictionary = ["blueView":blueView, "redView":redView]

// 파란뷰의 크기 설정
let blueConstaintV = NSLayoutConstraint.constraintsWithVisualFormat("V:[blueView(100)]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)
let blueConstaintH = NSLayoutConstraint.constraintsWithVisualFormat("H:[blueView(100)]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)

// 빨간뷰의 크기 설정
let redConstaintV = NSLayoutConstraint.constraintsWithVisualFormat("V:[redView(200)]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)
let redConstaintH = NSLayoutConstraint.constraintsWithVisualFormat("H:[redView(100)]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)

// 1. 뷰 정렬(가로)을 정의
let constraintPosH = NSLayoutConstraint.constraintsWithVisualFormat("H:|-30-[blueView]-10-[redView]",
    options: NSLayoutFormatOptions.AlignAllTop,
    metrics: nil,
    views: viewsDictionary)

// 뷰 정렬(세로)을 정의
let constraintPosV = NSLayoutConstraint.constraintsWithVisualFormat("V:|-130-[blueView]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)

blueView.addConstraints(blueConstaintV)
blueView.addConstraints(blueConstaintH)

redView.addConstraints(redConstaintV)
redView.addConstraints(redConstaintH)

self.view.addConstraints(constraintPosV)
self.view.addConstraints(constraintPosH)


```

![ios-autolayout-with-swift-3]({{ site.url }}/assets/ios-autolayout-with-swift-3.png)

**1. options의 값에 top을 기준으로 나란히 정렬하기 위해 `NSLayoutFormatOptions.AlignAllTop`을 사용했다**

  * 포지션을 설정할 때 `options`는 특별한 기준을 두지 않는다면 `NSLayoutFormatOptions.allZeros`로 한다. `NSLayoutFormatOptions` 에는 왼쪽기준 오른쪽기준 중앙정렬 등 여러가지 옵션을 줄 수 있다.
  * `H:|-30-[blueView]-10-[redView]` 은 Horizontal을 기준으로 super view의 왼쪽에서 여백 30 + blueView + 여백 10 + redView 를 배치한 것이다.
  * `V:|-30-[blueView]-20-[redView]` 은 Vertical을 기준으로 super view의 위에서 여백 30 + blueView + 여백 20 + redView 를 배치했다.
