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

if __name__ == '__main__':

    app.run('0.0.0.0', port=5000, debug=True)


