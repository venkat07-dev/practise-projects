from flask import *


app = Flask(__name__)
@app.route("/login",methods=["GET"])
def login():
    username=request.args.get("uname")
    password = request.args.get("password")
    if username=="venkat" and password=="123":
        return "Welcome %s" %username
    else:
        return "invalid login"

# @app.route('/hello/<user>')
# def home(user):
#     return render_template('hello.html',name=user)

# @app.route('/hello1/<int:score>')
# def home1(score):
#     return render_template('hello.html',marks=score)

if __name__ == "__main__":
    app.run()