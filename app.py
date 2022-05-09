from flask import Flask, render_template,request,jsonify, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('main.html')

@app.route('/mypage')
def show_mypage():
    return render_template('mypage.html')

@app.route('/signup')
def show_signup_page():
    return render_template('sign_up.html')

@app.route('/login')
def show_login_page():
    return render_template('login.html')

# 이미지 업로드 API
@app.route('/imageUpload')
def input_image():
    # 사용자 요청 : 이미지 파일
    file_receive = request.files['file_give']
    # API 처리 : 파일을 static/img 에 저장
    save_to = 'static/mypicture.jpg'
    file_receive.save(save_to)
    # 응답데이터 : 결과 성공 / 이미지 업로드 성공 메시지 출력
    return jsonify({'result':'success', 'msg': '이미지 업로드에 성공했습니다.'})


if __name__ == '__main__':

    app.run('0.0.0.0', port=5000, debug=True)


