---
layout: post
title:  "[MongoDB] CSV 파일로 추출하기"
date:   2015-06-23 00:00:00
categories: DB
---
# 몽고DB에서 CSV 파일로 추출하기

MongoDB 의 데이터를 추출할때 명령어 한줄이면 csv 파일로 추출할 수 있다!

`mongoexport --host localhost --db dbname --collection name --csv --out out_collection.csv --fields firstName,sencondName,lastName`

***주의할 점은 마지막에 필드명을 적는파라미터에 띄어쓰기를 하지 않고 쭉붙여서 써야한다.***
