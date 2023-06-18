from flask import Flask,render_template

app=Flask(__name__)



@app.route('/hello2')
def home2():
    dict={"phy":56,"chm":96,"mat":76}
    return render_template('hello.html',result=dict)

if __name__=='__main__':
    app.run(debug=True)