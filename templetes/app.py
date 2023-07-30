from flask import Flask, render_template, request

app = Flask(__name__)

# ルートURLにアクセスしたときの処理
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # フォームから送信されたユーザー名とパスワードを取得
        username = request.form['username']
        password = request.form['password']
        
        # ログイン処理を行う（例: ユーザー名とパスワードのバリデーション）
        if username == 'admin' and password == 'password':
            return render_template('attendance.html', username=username)
        else:
            error_message = 'ユーザー名またはパスワードが正しくありません'
            return render_template('login.html', error=error_message)
    else:
        return render_template('login.html')

if __name__ == '__main__':
    app.run()
