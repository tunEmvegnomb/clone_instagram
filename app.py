from flask import Flask, render_template, jsonify, request, session, redirect, url_for
from pymongo import MongoClient
import jwt
import datetime
import hashlib

app = Flask(__name__)


client = MongoClient('mongodb+srv://test:sparta@cluster0.nqwfa.mongodb.net/Cluster0?retryWrites=true&w=majority')

db = client.dbsparta_plus_week4

SECRET_KEY = 'SPARTA'


@app.route('/')
def home():
    # return render_template('login.html')

    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        user_info = db.user.find_one({"id": payload['id']})
        return render_template('main.html')
    except jwt.ExpiredSignatureError:
        # return redirect(url_for("show_login"))
        return render_template('login.html')

    except jwt.exceptions.DecodeError:
        # return redirect(url_for("show_login"))
        return render_template('login.html')


@app.route('/signup', methods=['GET', 'POST'])
def api_register():
    if request.method == 'GET':
        return render_template("sign_up.html")
    elif request.method == 'POST':
        id_receive = request.form['id_give']
        pw_receive = request.form['pw_give']

        pw_hash = hashlib.sha256(pw_receive.encode('utf-8')).hexdigest()

        doc = {
            'user_id': id_receive,
            'hashed_password': pw_hash,
            'follow': [],
            'follower': [],
            'posts': []
        }
        
        db.user.insert_one(doc)

        return jsonify({'result': 'success'})


# @app.route('/loginpage')
# def show_login():
#     return render_template("login.html")


# [로그인 API]
# id, pw를 받아서 맞춰보고, 토큰을 만들어 발급합니다.
@app.route('/login', methods=['POST'])
def api_login():
    id_receive = request.form['id_give']
    pw_receive = request.form['pw_give']

    pw_hash = hashlib.sha256(pw_receive.encode('utf-8')).hexdigest()

    result = db.user.find_one({'user_id': id_receive, 'hashed_password': pw_hash})

    if result is not None:
        payload = {
            'user_id': id_receive,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=60*60*24)
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

        return jsonify({'result': 'success', 'token': token})
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


# [유저 정보 확인 API]
# 로그인된 유저만 call 할 수 있는 API입니다.
# 유효한 토큰을 줘야 올바른 결과를 얻어갈 수 있습니다.
# (그렇지 않으면 남의 장바구니라든가, 정보를 누구나 볼 수 있겠죠?)
@app.route('/api/nick', methods=['GET'])
def api_valid():
    token_receive = request.cookies.get('mytoken')

    # try / catch 문?
    # try 아래를 실행했다가, 에러가 있으면 except 구분으로 가란 얘기입니다.

    try:
        # token을 시크릿키로 디코딩합니다.
        # 보실 수 있도록 payload를 print 해두었습니다. 우리가 로그인 시 넣은 그 payload와 같은 것이 나옵니다.
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        print(payload)

        # payload 안에 id가 들어있습니다. 이 id로 유저정보를 찾습니다.
        # 여기에선 그 예로 닉네임을 보내주겠습니다.
        userinfo = db.user.find_one({'user_id': payload['user_id']}, {'_id': 0})
        return jsonify({'result': 'success', 'nickname': userinfo['nick']})
    except jwt.ExpiredSignatureError:
        # 위를 실행했는데 만료시간이 지났으면 에러가 납니다.
        return jsonify({'result': 'fail', 'msg': '로그인 시간이 만료되었습니다.'})
    except jwt.exceptions.DecodeError:
        return jsonify({'result': 'fail', 'msg': '로그인 정보가 존재하지 않습니다.'})


# 이미지 업로드 API
# @app.route('/imageUpload', methods=['POST'])
# def input_image():
#     # 사용자 요청 : 이미지 파일
#     file_receive = request.files['file_give']
#     print(file_receive)
#     # API 처리
#     #   확장자 추출
#     extension = file_receive.filename.split('.')[-1]
#     fullname = file_receive.filename.split('.')[0]
#
#     #   이름 중복 방지를 위해 파일 이름 리네임
#     #   업로드 날짜 값 추가하기
#     today = datetime.datetime.now()
#     mytime = today.strftime('%Y-%m-%d-%H-%M-%S')
#     filename = f'feed-{mytime}'
#
#     #   파일 경로 설정
#     save_to = f'static/img/{filename}.{extension}'
#     #   파일을 static/img 에 저장
#     file_receive.save(save_to)
#
#     #   파일 이름만 DB에 넣기
#     db.feeds.insert_one({'img':f'{filename}.{extension}'})
#
#
#     # 응답데이터 : 결과 성공 / 이미지 업로드 성공 메시지 /
#     return jsonify({'result':'success', 'msg': '이미지 업로드에 성공했습니다.', 'filename': save_to})

@app.route('/feedUpload', methods=['POST'])
def upload_feed():
    # 사용자 요청 : 이미지 파일
    file_receive = request.files['file_give']
    # API 처리
    #   확장자 추출
    extension = file_receive.filename.split('.')[-1]
    fullname = file_receive.filename.split('.')[0]
    
    #   이름 중복 방지를 위해 파일 이름 리네임
    #   업로드 날짜 값 추가하기
    now = datetime.datetime.now()
    time_now = now.strftime('%Y-%m-%d-%H-%M-%S')
    filename = f'feed-{time_now}'
    
    #   파일 경로 설정
    save_to = f'static/img/{filename}.{extension}'
    #   파일을 static/img 에 저장
    file_receive.save(save_to)
    
    #   파일 이름만 DB에 넣기
    db.feeds.insert_one({'img': f'{filename}.{extension}'})
    ############################################################################
    # 본문 업로드 부분
    token_receive = request.cookies.get('mytoken')
    content_receive = request.form['content_give']

    payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

    now = datetime.datetime.now()
    time_now = now.strftime('%Y-%m-%d-%H-%M-%S')
    doc = {
        'post_create_time': time_now,
        'img_title': f'{filename}.{extension}',
        'article': content_receive,
        'like_post_ids': [],
        'comments': []
    }

    db.user.update_one({'user_id': payload['user_id']}, {'$push': {'posts': doc}}, upsert=True)

    return jsonify({'result': 'success', 'msg': '새 피드를 등록했습니다 '})


@app.route('/mypage', methods=['GET'])
def show_mypage():
    # 로그인에서 받은 mytoken 값 요청해서 저장
    token_receive = request.args.get('mytoken')

    # try 아래를 실행했다가, 에러가 있으면 except 실행.
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        user_info = db.user.find_one({'id': payload['id']}, {'_id': False})
        return jsonify({'user_info': user_info})
    except jwt.ExpiredSignatureError:
        # return redirect(url_for("login", msg="로그인 시간이 만료되었습니다."))
        return render_template('login.html')


@app.route("/getFeed", methods=['GET'])
def send_posts():
    users = db.user.find({}, {'_id': False})
    posts = []
    for user in users:
        print(user)
        for post in user["posts"]:
            if len(post) != 0:
                if len(post["like_post_ids"]) != 0:
                    like_post_ids = post["like_post_ids"]
                    like_post_count = len(post["like_post_ids"])
                else:
                    like_post_ids = None
                    like_post_count = None
                if len(post["comments"]) != 0:
                    comments = post["comments"]
                else:
                    comments = None
            
                post_data = {
                    "author_id": user["user_id"],
                    "post_img": post["img_title"],
                    "article": post["article"],
                    "like_post_ids": like_post_ids,
                    "like_post_count": like_post_count,
                    "post_create_time": post["post_create_time"],
                    "comments": comments
                }
                posts.append(post_data)
            # 시간순 정렬 최근 것이 먼저 오도록
    datas = sorted(posts, key=lambda post: post["post_create_time"])
    datas.reverse()
    return jsonify({"result": datas})


@app.route('/follow', methods=['POST'])
def to_follow():
    token_receive = request.cookies.get('mytoken')
    payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

    follow_id_receive = request.form['follow_id_give']

    now = datetime.datetime.now()
    time_now = now.strftime('%Y-%m-%d-%H-%M-%S')
    doc_follow = {
            'follow_id': follow_id_receive,
            'follow_time': time_now,
    }
    doc_follower = {
            'follower_id': payload['user_id'],
            'follower_time': time_now,
    }

    db.user.update_one({'user_id': payload['user_id']}, {'$push': {'follow': doc_follow}}, upsert=True)
    db.user.update_one({'user_id': follow_id_receive}, {'$push': {'follower': doc_follower}}, upsert=True)
    return jsonify({'result': 'success', 'msg': '팔로우 완료'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)