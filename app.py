from flask import Flask, render_template,request,jsonify

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

if __name__ == '__main__':

    app.run('0.0.0.0', port=5000, debug=True)


