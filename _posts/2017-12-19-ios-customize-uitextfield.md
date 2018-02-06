---
layout: post
title:  "[iOS] UITextField Padding 설정"
date:   2017-12-19 09:41:00
categories: iOS
tags: xcode, 
description: "UITextField Padding을 설정하는 방법 3가지"
---

# 1. leftView, rightView 추가

₩₩₩
let paddingView = UIView(frame: CGRect(x: 0, y: 0, width: 4, height: textField.frame.height))
textField.leftView = paddingView
textField.leftViewMode = .always
textField.rightView = paddingView
textField.rightViewMode = .always
₩₩₩

장점: 이 방법은 UITextField 에서 제공하는 양옆에 뷰를 추가할 수 있는 영역에 empty뷰를 넣어서 여백을 주는 방법으로 간단하게 사용할수 있지만
단점: 이것을 사용하면 편집중 생기는 클리어버튼(x버튼)이 사라질 수도 있다.

# 2. CAlayer 변경

textField.layer.sublayerTransform = CATransform3DMakeTranslation(5, 0, 0)

Core Animation Layer 를 사용해서도 padding처럼(?) 효과를 줄 수 있다.

장점: 한줄로 간단하게 효과를 줄 수 있지만
단점: 원하지 않게 다른 뷰들도 영향이 간다. 예를 들어 leftVIew, rightView도 함께 위치가 변경되어있다

# 3. SubClass

class PadedTextField: UITextField {
    
    var insetX: CGFloat = 10
    var insetY: CGFloat = 10
    
    override func textRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: insetX, dy: insetY)
    }
    
    override func editingRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: insetX, dy: insetY)
    }
    
}

장점: 뷰의 top, bottom, left, right 모두 padding 을 주는것이 가능하다
단점: Padding 을 주기 위해 Subclassing 을 해야한다.