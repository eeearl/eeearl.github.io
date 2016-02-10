---
layout: post
title:  "Android에서 SQLite를 close 하지마라!?"
date:   2014-01-03 00:00:00
categories: android
---

안드로이드에서 내부에 데이터를 저장해야 할 경우 Sqlite를 편리하게 사용됩니다. 파일 형식이기 때문에 데이터를 입력하기 전엔 open을 하고 다 입력을 하면 close를 해서 사용하는 것이 일반적입니다.

특정 액션에서만 데이터를 입력할 경우 open과 close 를 순차적으로 호출하면 되지만 네트워크를 여러번 비동기로 호출해서 데이터를 저장할 경우 open과 close 가 무작위로 실행되다 close된 상태에서 데이터를 입력하면 에러가 발생해 어디서 호출 해야하나 고민을 잠깐 했었습니다.

제가생각했던 간단한 방법은 Activity의 Lifecycle을 생각해서 Resume과 Pause에 open과 close를 해도 되지만 구글링을 하던중에 Android Framework Engineer 가 안드로이드에서는 close를 하지 않아도 된다는 내용을 보았습니다. (close를 권장하지 않았던 걸로 기억합니다) 안드로이드 내에서 자동으로 close 된다고 했습니다.

실제로 테스트 해보니 에러가 나오지 않았습니다.

그러면 제 문제를 봤을때 비동기적인 상황에서 계속 해서 open호출 하면 안돼고 Singleton Pattern을 사용해서 공통된 인스턴스만 사용하게 하자 라고 생각해 코드를 작성했습니다.

    public class SQLiteHelper extends SQLiteOpenHelper {

        private static final String DB_NAME = "DB_NAME";
        private static final int DB_VERSION = 1;

        private static SQLiteHelper INSTANCE;
        private static SQLiteDatabase mDb;

        public static SQLiteHelper getInstance(Context context) {
            if (INSTANCE == null) {
                INSTANCE = new SQLiteHelper(context.getApplicationContext());
                mDb = INSTANCE.getWritableDatabase();
            }

            return  INSTANCE;
        }

        public void open() {
            if (mDb.isOpen() == false) {
                INSTANCE.onOpen(mDb);
            }
        }

        public SQLiteHelper(Context context) {
            super(context, DB_NAME, null, DB_VERSION);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        }
    }