---
layout: post
title:  "[iOS] 코드로 Autolayout 적용하기 (Swift로 하는 autolayout) - 2"
date:   "2014-09-24T00:00:00"
path: "/2014-09-24-ios-autolayout-with-swift-2"
categories: iOS
---
# 코드로 Autolayout 적용하기 (Swift로 하는 autolayout) - 2

Swift로 [Autolayout 적용하기 (코드로 하는 autolayout) - 1]({{ site.url }}/ios-autolayout-with-swift-1) 에서는 간단한 뷰 배치에 대해서 해보았다. 이번엔 두개 이상의 뷰에 관계를 엮어 적용해본다.

```swift

// 파란뷰 생성
var blueView: UIView = UIView()
blueView.setTranslatesAutoresizingMaskIntoConstraints(false)
blueView.backgroundColor = UIColor(red: 0.0, green: 0.0, blue: 1.0, alpha: 1.0)

// 빨간뷰 생성
var redView: UIView = UIView()
redView.setTranslatesAutoresizingMaskIntoConstraints(false)
redView.backgroundColor = UIColor(red: 1.0, green: 0.01, blue: 0.07, alpha: 1.0)

// 1. 뷰에 추가
self.view.addSubview(blueView)
self.view.addSubview(redView)

// 2. 뷰 딕셔너리 생성
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

// 3. 뷰 정렬(가로)을 정의
let constraintPosH = NSLayoutConstraint.constraintsWithVisualFormat("H:|-30-[blueView]-10-[redView]",
    options: NSLayoutFormatOptions.allZeros,
    metrics: nil,
    views: viewsDictionary)
// 뷰 정렬(세로)을 정의
let constraintPosV = NSLayoutConstraint.constraintsWithVisualFormat("V:|-130-[blueView]-20-[redView]",
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

가로세로 100x100의 파란색 뷰와 가로세로 30x30의 붉은색 뷰를 배치하고 Vertical과 Horizontal 의 여백과 간격을 주었다.

![ios-autolayout-with-swift-2]({{ site.url }}/assets/ios-autolayout-with-swift-2.png)


**1.두개의 뷰의 `addSubView`를 할때 레이어가 밑에서 부터 위로 쌓이는 순서가 된다.**

**2. 뷰 딕셔너리를 생성하는데 용도는 아래에 있는 Visual Format에서 쓰일 값(뷰오브젝트 또는 수치)를 키값으로 쓰이기 위해 정의한다.**

**3. 뷰의 정렬하는 규칙을 정의한다. 가로를 정의할 땐 'H', 세로를 정의할 땐 'V'로 시작한다. 가로 100, 세로 200의 길이를 정의한다면 가로는 `H:[view(100)]`, 세로는 `V:[view(200)]` '|'는 뷰의 끝을 의미한다. 예를 들어 `H:|-30-[view]` 는 왼쪽 끝에서 30 의 여백을 두고 view를 위치하겠다는 의미이다. 여기선 왼쪽 끝을 기준으로 여백을 주었고 두개의 뷰 사이에 간격을 주었다.**

  * 포지션을 설정할 때 `options`는 특별한 기준을 두지 않는다면 `NSLayoutFormatOptions.allZeros`로 한다. `NSLayoutFormatOptions` 에는 왼쪽기준 오른쪽기준 중앙정렬 등 여러가지 옵션을 줄 수 있다.
  * `H:|-30-[blueView]-10-[redView]` 은 Horizontal을 기준으로 super view의 왼쪽에서 여백 30 + blueView + 여백 10 + redView 를 배치한 것이다.
  * `V:|-30-[blueView]-20-[redView]` 은 Vertical을 기준으로 super view의 위에서 여백 30 + blueView + 여백 20 + redView 를 배치했다.
