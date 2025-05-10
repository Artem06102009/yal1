from flask import Flask, render_template, request, send_file, url_for

app = Flask(__name__)
user = "username"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/signup")
def sign_up():
    return render_template("signup.html")


@app.route("/game")
def game():
    return render_template("game.html")


@app.route("/signin")
def sign_in():
    return render_template("signin.html")


@app.route("/table")
def table():
    return render_template("table.html")


@app.route("/rating")
def rating():
    return render_template("rating.html")


@app.route("/images/<img_name>")
def image(img_name):
    return send_file(f"./static/images/{img_name}")


app.run(debug=True)
