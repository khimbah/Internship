from flask import Flask, current_app, request, session
from flask-login import LoginManager, login_user, logout_user, \
     login_required, current_user
from flask.ext.wtf import Form, TextField, PasswordField, Required, Email
from flask.ext.principal import Principal, Identity, AnonymousIdentity, \
     identity_changed

app = Flask(__name__)

Principal(app)

login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(userid):
    # Return an instance of the User model
    return datastore.find_user(id=userid)

class LoginForm(Form):
    email = TextField()
    password = PasswordField()

@app.route('/login', methods=['GET', 'POST'])
def login():
    # A hypothetical login form that uses Flask-WTF
    form = LoginForm()

    # Validate form input
    if form.validate_on_submit():
        # Retrieve the user from the hypothetical datastore
        user = datastore.find_user(email=form.email.data)

        # Compare passwords (use password hashing production)
        if form.password.data == user.password:
            # Keep the user info in the session using Flask-Login
            login_user(user)

            # Tell Flask-Principal the identity changed
            identity_changed.send(current_app._get_current_object(),
                                  identity=Identity(user.id))

            return redirect(request.args.get('next') or '/')

    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    # Remove the user information from the session
    logout_user()

    # Remove session keys set by Flask-Principal
    for key in ('identity.name', 'identity.auth_type'):
        session.pop(key, None)

    # Tell Flask-Principal the user is anonymous
    identity_changed.send(current_app._get_current_object(),
                          identity=AnonymousIdentity())

    return redirect(request.args.get('next') or '/')

    if __name__=='__main__':
       app.run(debug=True)
