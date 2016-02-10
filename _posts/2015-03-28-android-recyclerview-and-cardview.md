---
layout: post
title:  "[Android] 안드로이드 카드뷰 (CardView) & 리사이클러뷰 (RecyclerView)"
date:   2015-03-28 00:00:00
categories: Android
tags: android, cardview, recyclerview
---
# 안드로이드 카드뷰 (CardView) & 리사이클러뷰 (RecyclerView)

**안드로이드 L이 발표될 시점에 Support Library v7 에 카드뷰와 리사이클러뷰가 추가되었었다. 카드뷰는 라운딩 효과와 셰도우 효과를 쉽게 적용할 수 있는 레이아웃이고 리사이클러뷰는 기존의 리스트와 그리드뷰의 여러문제점을 보완하고 더 다양한 UI를 그릴 수 있도록 새롭게 디자인되어 제공되는 뷰이다.**

## LayoutManager
리사이클러뷰는 LayoutManager 라는 추상클래스를 제공하는데 기본적으로 안드로이드에서는 세가지의 레이아웃을 제공한다.
  - LinearLayoutManager
  - GridLayoutManager
  - StaggeredGridLayoutManager

`LinearLayoutManager` 는 일반적인 리스트 구조를 가지는 레이아웃인데 위에서 아래로 (Vertical) 또는 왼쪽에서 오른쪽으로 (Horizontal) 리스트의 방향을 정할 수 있다.
`GridLayoutManager` 는 그리드 형태로 디스플레이하는 레이아웃이다.
`StaggeredGridLayoutManager` 는 리스트의 아이템이 각각의 높이와 너비를 갖는 레이아웃인데 ETSY, Pinterest 에서 사용하는 레이아웃이다.

## ViewHolder Pattern
롤리팝 이전의 리스트뷰나 그리드의 어댑터 클래스에서 뷰홀더 패턴은 선택적이 었지만 리사이클러뷰의 어댑터에선 `RecyclerView.ViewHolder` 라는 클래스를 필수로 구현하게 되었다. 이전에 선택적이었다고 해도 성능의 차이가 너무 컸기 때문에 이렇게 한것 같다.

## ItemAnimator, ItemDecoration
아이템에 대해서 확장을 쉽게하기 위한 구조를 가지고 있어서 아이템의 애니메이션, 데코레이션에 대한 추상클래스를 제공하고 있다.

## notifyDataSetChanged()
리스트의 값의 변화에 알림을 줄때 기존의 메서드에서 세분화된 메서드들이 생겼다.
  - notifyItemChanged(int)
  - notifyItemInserted(int)
  - notifyItemRemoved(int)
  - notifyItemRangeChanged(int, int)
  - notifyItemRangeInserted(int, int)
  - notifyItemRangeRemoved(int, int)

변경, 추가, 삭제, 범위를 지정해서 변화의 알림을 줄 수 있다.


## 사용방법
안드로이드 스튜디오에서 다음과 같이 dependencies를 설정해주면 된다.

    compile 'com.android.support:cardview-v7:21.0.2'
    compile 'com.android.support:recyclerview-v7:21.0.3'

## 아이템 클릭 이벤트 처리
리사이클러뷰에서는 리스트뷰와 다르게 OnClickItemListener 와 같은 리스너가 없다. ViewHolder를 정의할 때 원하는 View에 직접 OnClickListener를 등록해야 하는데 기존의 클릭 이벤트의 중첩에 대한 문제를 피하기 위해 없앴다고 생각한다.

간단한 예제를 만들어봤다. [Github Source](https://github.com/ul7290/cardview-and-recyclerview-example)

##### 그외
발빠른 능력자님이 복잡한 레이아웃을 구현했다. 오픈소스로 되어있어서 참고하면 좋을것 같다. Github: [twoway-view](https://github.com/lucasr/twoway-view)

##### Reference
[http://android-developers.blogspot.com/2014/10/implementing-material-design-in-your.html](http://android-developers.blogspot.com/2014/10/implementing-material-design-in-your.html)
[https://developer.android.com/reference/android/support/v7/widget/CardView.html](https://developer.android.com/reference/android/support/v7/widget/CardView.html)
[https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)
[https://developer.android.com/reference/android/support/v7/widget/RecyclerView.LayoutManager.html](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.LayoutManager.html)
[https://developer.android.com/reference/android/support/v7/widget/RecyclerView.Adapter.html](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.Adapter.html)