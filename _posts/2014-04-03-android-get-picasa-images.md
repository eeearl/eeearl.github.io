---
layout: post
title:  "갤러리에서 Picasa나 Google+의 Sync된 이미지를 가져오는 방법"
date:   2014-04-03 00:00:00
categories: Android
---

안드로이드에서 Intent를 사용해 갤러리나 사진앱을 통해 사진의 Uri를 가져오는 코드는 이렇습니다. 

    Intent intent = new Intent(Intent.ACTION_PICK);  
    intent.setType(MediaStore.Images.Media.CONTENT_TYPE);  
    startActivityForResult(intent, 1000); 

,

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Uri imageUri = data.getData();
        Bitmap bitmap = BitmapFactory.decodeFile(getPath(imageUri));
    }
    public String getPath(Uri uri) {
        String[] projection = {MediaStore.Images.Media.DATA};
        String result = null
        CursorLoader cursorLoader = new CursorLoader(this, uri, projection, null, null, null);
        Cursor cursor = cursorLoader.loadInBackground();
        if (cursor != null) {
            int columnIndex = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            cursor.moveToFirst();
            result = cursor.getString(columnIndex);
        }
            return result;
    }


파일로 읽어오기 때문에 퍼미션도 줘야 합니다.


간단하게(?) 이정도면 내장된 이미지를 Bitmap으로 가져올 수 있습니다.

그런데 이렇게 해서 못가져오는 이미지가 있는데.. 갤러리에서 Picasa의 싱크되어있는 이미지를 선택하게 되면 에러가 나게 됩니다. 이땐 다른 방법을 사용해야 합니다.

에러의 이유는 갤러리에서 가져온 Uri의 위치 때문입니다.

picasa에 sync된 이미지를 썸네일로 보여주는 건 캐싱되어 있을 것이지만 실제 파일은 서버에 있을테니 Uri 주소는 다른 사진의 Uri와 다른 주소를 가지고 있습니다.

**일반적인 이미지 Uri** “content://media/external/images/media/122733″   
**Sync된 이미지 Uri** “content://com.google.android.gallery3d.provider/picasa/item/122733″  

보통 이미지의 Uri는 메모리의 위치를 가지고 있지만 Sync 된 이미지의 Uri는 앱의 위치를 가지고 있습니다…

그래서 해결방법은


    @Override
     protected void onActivityResult(int requestCode, int resultCode, Intent data) {
         Uri uri = data.getData();
         String[] projection = {MediaStore.Images.Media.DATA};
         CursorLoader cursorLoader = new CursorLoader(this, uri, projection, null, null, null);
         Cursor cursor = cursorLoader.loadInBackground();
         if (cursor != null) {
             cursor.moveToFirst();
         }
         Bitmap outBitmap = null;
         File file = new File(Environment.getExternalStorageDirectory(), "photo.jpg");
         InputStream input = null;
         OutputStream output = null;
         try {
             input = getContentResolver().openInputStream(uri);
             output = new FileOutputStream(file);
             copyStream(input, output);
             output.close();
             outBitmap = BitmapFactory.decodeStream(new FileInputStream(file));
             output.close();
             input.close();
         } catch (FileNotFoundException e) {
             e.printStackTrace();
         } catch (IOException e) {
             e.printStackTrace();
         }
        cursor.close();
    }


이걸보고 앞에 Cursor를 왜 썼는지 궁금해 하실 수도 있을거 같습니다. 저 Cursor를 쓰지 않으면 FileNotFound 에러를 던집니다. Cursor로 가리키고 있어야 파일로 읽을 수 있는것입니다.

그리고 임시의 파일에 스트림을 사용해서 이미지를 저장하고 그 파일을 읽어오는 방법입니다.

코드가 조금 길어졌지만 파일로 캐싱 후 이미지를 로딩하는 방법이 필요하다면 이 방법 을 사용하시면 되겠습니다.

파일캐싱이 필요없다면!!

굉장히 짧은 코드로 끝납니다..


    try {
        InputStream is = getContentResolver().openInputStream(imageUri);
        Bitmap bitmap = BitmapFactory.decodeStream(is);
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    }


앞서 설명했던 코드를 보시고 이 코드를 보시면 이해하기 수월하실 수도 있습니다;;

BitmapFactory 클래스에서 바로 스트림으로 부터 디코딩을 해주는 메소드가 있어서 그걸 쓰면 코드가 짧아집니다;

위의 긴 코드로 구현했던 부분은 input스트림과 output스트림을 모두 직접 구현한 것이고, BitmapFactory 클래스엔 위에 구현한 것이 이미 구현된 것이라 보시면 되겠네요 개발 방향에 따라 좋은방향으로 사용하면 되겠습니다.

<blockquote>예제로 보여드린 코드는 안드로이드에서 실제 구현하실 때 비동기로 구현하셔야 문제가 없습니다.</blockquote>