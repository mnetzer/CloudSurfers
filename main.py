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

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)

