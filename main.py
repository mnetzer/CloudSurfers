from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/pickup')
def pickup():
    return render_template('pickup.html')

@app.route('/cancel')
def cancel():
    return render_template('dashboard.html')

@app.route('/pickup_unloggedin')
def pickup_unloggedin():
    return render_template('pickup_unloggedin.html')

@app.route('/login3')
def login3():
    return render_template('login3.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)

