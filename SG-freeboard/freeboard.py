from flask import Flask, jsonify, request, render_template
from pymongo import MongoClient
import jwt
import hashlib
import datetime

SECRET_KEY = 'SPARTA'

client = MongoClient('localhost', 27017)
db = client.hombodies_clone_insta




user_id = "test_id_2"
password = "password"

hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

post_create_time = datetime.datetime.now()

img_src = "www.sample.src"
article = "This is test article"

doc = {
    # "user_num": 123,
    "user_id": user_id,
    "hashed_password": hashed_password,
    "follow": ["test_id_1"],
    "follower": ["test_id_1"],
    "posts": [{
        "post_create_time": post_create_time,
        "post_update_time": None,
        "img_src": img_src,
        "article": article,
        # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
        "like_post_ids": [],
        "comments": []

    }]
}

db.insta_users.insert_one(doc)


