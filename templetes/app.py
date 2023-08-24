from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# データベース接続設定を読み込み
app.config.from_object('resouce.dbConfig')

db = SQLAlchemy(app)  # 追加

# ユーザーテーブルの定義
class USER_TABLE(db.Model):

    id = db.Column(db.String(4), primary_key=True)
    userName = db.Column(db.String(30))
    password = db.Column(db.String(300))

# ルートURLにアクセスしたときの処理
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # フォームから送信されたユーザー名とパスワードを取得
        username = request.form['username']
        password = request.form['password']
        
        # ログイン処理を行う（例: ユーザー名とパスワードのバリデーション）
        if username == 'admin' and password == 'password':
            return render_template('attendance.html', username=username , )
        else:
            error_message = 'ユーザー名またはパスワードが正しくありません'
            return render_template('login.html', error=error_message)
    else:
        return render_template('login.html')
    
@app.route('/owner.html')
def owner():
    return render_template('owner.html')

# ユーザー追加の処理
@app.route('/userCreate.html', methods=['GET', 'POST'])
def userCreate():
    if request.method == 'POST':
        form_id = request.form.get('id')
        form_userName = request.form.get('userName')
        form_password = request.form.get('password')

        insert = USER_TABLE(
            id = form_id,
            userName = form_userName,
            password = form_password
        )
        db.session.add(insert)
        db.session.commit()
        db.session.close()
        return render_template('userCreate.html')
    else:
        return render_template('userCreate.html')

if __name__ == '__main__':
    app.run(debug=True, port=8888, threaded=True)  
    
    