---
layout: post
title:  "Android ViewPager 기본예제"
date:   2014-01-12 00:00:00
categories: android
---

안드로이드에서 굉장히 많이 쓰이는 AdapterView 입니다. 각각의 View에 다양한 레이아웃을 적용할 수 있어서 응용 또한 다양하게 할 수 있습니다. 이번 포스팅는 가장 기본적인 코드만 다뤄보겠습니다.

ViewPager를 사용하려면 Android에서 제공하는 Support Library가 필요합니다. (최신 이클립스에 프로젝트를 생성하면 자동으로 추가되긴 합니다)
혹시 포함되어있지 않았다면 [android-support-v4.jar] 파일은 SDK폴더에 extras 안에서 찾을 수 있습니다.

* 이 예제는 프로젝트를 생성한 후 기본이 되는 activity 클래스와 xml레이아웃을 수정해 작업했습니다.

**activity_main.xml**

- support library에 있는 View를 사용할 때는 android.support.v4.view.ViewPager 로 패키지 이름을 전부 적어야 합니다.

    <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity" >

        <android.support.v4.view.ViewPager
            android:id="@+id/pager"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            />

    </RelativeLayout>
 

**MainActivity.java**

- Activity 에서는 Inner Class로 Adapter 클래스를 만들고 ViewPager에 어댑터를 연결해줍니다.
- PagerAdapter의 종류도 몇가지가 있습니다. FragmentPagerAdapter, FragmentStatePagerAdapter, PagerAdapter

    public class MainActivity extends FragmentActivity {

        private ViewPager mViewPager;
        private PagerAdapter mPagerAdapter;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

            mViewPager = (ViewPager) findViewById(R.id.pager);
            mPagerAdapter = new PagerAdapter(getSupportFragmentManager());
            mViewPager.setAdapter(mPagerAdapter);
        }

        private class PagerAdapter extends FragmentStatePagerAdapter {

            public PagerAdapter(FragmentManager fm) {
                super(fm);
            }

            @Override
            public Fragment getItem(int position) {
                            // 해당하는 page의 Fragment를 생성합니다.
                return PageFragment.create(position);
            }

            @Override
            public int getCount() {
                return 5;  // 총 5개의 page를 보여줍니다.
            }

        }
    }

- 각각의 PagerAdapter는 조금다른 특징을 가지고 있습니다. Fragment를 다루는게 일반적이기 때문에 FragmentPagerAdapter 의 큰 다른점 이라면
FragmentPagerAdapter는 화면을 슬라이딩으로 전환할 때 한 번 생성된(화면에 보인) Fragment를 계속 메모리상 가지고 있습니다. 이전 Fragment로 슬라이딩을 해서 돌아간다고 하면 이전에 생성된 Fragment로 돌아가는 겁니다.
FragmentStatePagerAdapter는 화면이 전환될 때 이전(화면에서 보이지 않는) Fragment는 메모리상 제거(destroy)가 됩니다. Adapter의 Fragment가 많거나 갯수를 알수없을 때 메모리관련 이슈를 위해 사용하는것이 좋다고 하네요

**PageFragment.java**

    public class PageFragment extends Fragment {

        private int mPageNumber;

        public static PageFragment create(int pageNumber) {
            PageFragment fragment = new PageFragment();
            Bundle args = new Bundle();
            args.putInt("page", pageNumber);
            fragment.setArguments(args);
            return fragment;
        }

        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            mPageNumber = getArguments().getInt("page");
        }

        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                Bundle savedInstanceState) {
            ViewGroup rootView = (ViewGroup) inflater.inflate(R.layout.fragment_page, container, false);
            ((TextView) rootView.findViewById(R.id.number)).setText(mPageNumber + "");
            return rootView;
        }
    }

Fragment 클래스는 TextView 하나에 page 번호만 보여주는 화면을 생성합니다.

위 코드를 적용한 화면입니다.

![android-viewpager-example]({{ site.url }}/assets/pager_basic.gif)