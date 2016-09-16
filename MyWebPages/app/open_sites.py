from flask import Flask, send_from_directory, redirect, url_for, request, render_template
from flask import Response
from flask_wtf import Form
from wtforms import TextField, SubmitField
from wtforms import validators, ValidationError
from wtforms.validators import Required
from flaskext.principal import Permission, RoleNeed
from flaskext.principal import init_principal


app = Flask(__name__, static_folder='/home/cybernerd/Work/Internship/MyWebPages/app/', template_folder='/home/cybernerd/Work/Internship/MyWebPages/app/templates/')
init_principal(app)

app.secret_key = 'arizonazyco'

app.debug=True

# add mail server config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'khihmbah@gmail.com'
app.config['MAIL_PASSWORD'] = ''

mail = Mail(app)

@app.route('/login_handler', methods=['POST', 'GET'])
def login_handler(name, x.password):
    if request.method=='POST':
        user=request.form.get('username')
        password=request.form.get('password')
        if name==user and x.password==password
           return pass 
        return render_template('profile.html', name=user)
    else:
        user=request.args.get('username')
        if name==user and x.password==password
           return pass
        return render_template('profile.html', name=user) 

@app.route('/signup_handler', methods=['POST', 'GET'])
def signup_handler():
    if request.method=='POST':
        user=request.form.get('username')
        password=request.form.get('password')
        confirmpassword=request.form.get('confirmpassword')
        if password==confirmpassword
           flash('you are successfully signed up!')
           identity = Identity('user')
           identity.provides.add(('role', 'admin'))
           return redirect(url_for('login_handler'))
        return render_template('login.html', name=user, x.password=password)
    elif: user=request.args.get('username')
        password=request.form.get('password')
        confirmpassword=request.form.get('confirmpassword')
        if password==confirmpassword
           flash('you are successfully signed up!')
           identity = Identity('user')
           identity.provides.add(('role', 'admin'))
           return redirect(url_for('login_handler'))
        return render_template('login.html', name=user, x.password=password)
    else:
        flash('please ensure all details are correct')
        return render_template('sign_up.html', name=user, password=password)


@app.route('/contacts_handler', methods=('GET', 'POST'))
def contact_handler():
    form = ContactForm()

    if request.method == 'POST':
        if form.validate() == False:
            return 'Please fill in all fields <p><a href="/contacts_handler">Try Again!!!</a></p>'
        else:
            msg = Message("Message from your visitor" + form.name.data,
                          sender='YourUser@NameHere',
                          recipients=['yourRecieve@mail.com', 'someOther@mail.com'])
            msg.body = """
            From: %s <%s>,
            %s
            """ % (form.name.data, form.email.data, form.message.data)
            mail.send(msg)
            return "Successfully  sent message!"
    elif request.method == 'GET':
        return render_template('contacts_page.html', form=form)


@app.route('/')
def home():
    return render_template('home_page.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

@app.route('/signup')
def signup():
    return render_template('sign_up.html')

@app.route('/accounts')
@login_required
def accounts():
    return render_template('accounts.html')


@app.route('/navigation/')
def navigation():
    return render_template('navigation_bar.html')

@app.route('/products/')
def products():
    return render_template('products_page.html')

@app.route('/about')
def about():
    return render_template('about_page.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts_page.html')

@app.route('/carousel')
def carousel():
    return render_template('carousel_page.html')

#@app.route("/static/<path:filename>")
#def static_file(filename):
#   return send_from_directory('/home/cybernerd/Work/Internship/MyWebPages/app/static', filename)

@app.route('/img/<path:filename>')
def static_files(filename):
   return send_from_directory('/home/cybernerd/Work/Internship/MyWebPages/app/img', filename)    

if __name__ ==' __main__':
        app.run()
