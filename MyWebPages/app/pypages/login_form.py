from flask import Flask
from wtforms import Form

app = Flask(__name__, static_folder='/home/cybernerd/Work/Internship/MyWebPages/app/', template_folder='/home/cybernerd/Work/Internship/MyWebPages/app/templates/')

app.debug= True

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        login_user(user)

        flask.flash('Logged in successfully.')

        next = flask.request.args.get('next')
        if not next_is_valid(next):
            return flask.abort(400)

        return flask.redirect(next or flask.url_for('index'))
    return flask.render_template('login.html', form=form)

if __name__ ==' __main__':
        app.run()

