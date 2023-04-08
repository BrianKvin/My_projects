from flask import Flask, render_template

app = Flask(__name__, template_folder='template')

posts = [
    {
        'title': 'First blog post',
        'author': 'Corey Schafer',
        'content': 'This is my first blog post',
        'date_posted': 'April 7, 2023'
    },
     {
        'title': 'Second blog post',
        'author': 'Brian Kelvin',
        'content': 'This is my second blog post',
        'date_posted': 'April 8, 2023'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)
    # return "<h1>Home Page</h1>"


@app.route("/about")
def about():
    return render_template('about.html', title='About')
    # return "<h1>Home Page</h1>"




if __name__ == "__main__":
    app.run(debug=True)
