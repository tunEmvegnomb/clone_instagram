from flask import Flask, jsonify, request, render_template
from pymongo import MongoClient
import jwt
import hashlib
import datetime

SECRET_KEY = 'SPARTA'

client = MongoClient('localhost', 27017)
db = client.hombodies_clone_insta

app = Flask(__name__)


@app.route('/')
def open_homepage():
    return render_template('index.html')


# orders
# doc = {"buyer", "number", "address", "phone"}

# all_orders = list(db.orders.find({}))


@app.route('/sign_up', methods=['POST'])
def sign_up():
    user_id = request.form['user_id']
    password = request.form['password']

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    doc = {
        # "user_num": 123,
        "user_id": user_id,
        "hashed_password": hashed_password,
        "follow": [],
        "follower": [],
        "posts": []
    }

    db.insta_users.insert_one(doc)
    print("success")

    return jsonify({"result": "success"})


@app.route('/log_in', methods=['POST'])
def log_in():
    user_id = request.form['user_id']
    password = request.form['password']

    # 회원가입 때와 같은 방법으로 pw를 암호화합니다.
    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    # id, 암호화된pw을 가지고 해당 유저를 찾습니다.
    result = db.insta_users.find_one({'user_id': user_id, 'hashed_password': hashed_password})

    # 찾으면 JWT 토큰을 만들어 발급합니다.
    if result is not None:
        payload = {
            'user_id': user_id,
            # 'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=5)
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

        # token을 줍니다.
        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


# wip 토큰을 만료시키는것은 어려움
# @app.route('/log_out', method=['POST'])
# def log_out():
#
#     token_receive = request.cookies.get('mytoken')
#     payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
#     user_id = payload['user_id']

# return jsonify({"result": "success", "all_orders": orders})


@app.route('/create_post', methods=['POST'])
def create_post():
    # token_receive = request.cookies.get('mytoken')
    # payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
    user_id = request.form['user_id']
    img_src = request.form['img_src']
    article = request.form['article']

    post_create_time = datetime.datetime.now()

    db.insta_users.update_one({'user_id': user_id}, {'$set': {'posts': [
        {
            "post_create_time": post_create_time,
            "post_update_time": None,
            "img_src": img_src,
            "article": article,
            # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
            "like_post_ids": [],
            "comments": []

        }
    ]}})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
