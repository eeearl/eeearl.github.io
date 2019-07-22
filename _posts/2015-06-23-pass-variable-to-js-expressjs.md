---
layout: post
title:  "[Node.js/ExpressJS] Express.js 에서 웹페이지로 변수 넘기기"
date:   "2015-06-23T00:00:00"
path: "/2015-06-23-pass-variable-to-js-expressjs"
categories: node.js
---
# Express.js 에서 웹페이지로 변수 넘기기

express에서 웹페이지를 render할 때 변수를 함께 넣을 수 있다.

```
app.get('/login', function(req, res) {
  res.render('login', { id : 'idVal, name: nameVal });
});
```

변수를 넘기고 웹페이지에서 호출하려면

```
<script>
    var idVal = <%- JSON.stringify(id) %>;
    var nameVal = <%- JSON.stringify(name) %>;
</script>
```

자바스크립트 구현부분에서 가져올 수 있다.