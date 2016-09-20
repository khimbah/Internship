from flask import Flask,flash, send_from_directory, redirect, url_for, request, render_template
from flask import Response
from sign_up_form import RegistrationForm
app = Flask(__name__, static_folder='/home/cybernerd/Work/Internship/MyWebPages/app/', template_folder='/home/cybernerd/Work/Internship/MyWebPages/app/templates/')
app.debug=True
app.secret_key = 'arizonazyco'

@app.route('/contact_handler', methods = ['POST','GET'])
def contact_handler():
    if request.method=='POST':
       username = request.form['username']
       print("<h3>Welcome to our site </h3>'" + username + "'")
       email = request.form['email']
       print("Your email address is '" + email + "'")
       return render_template('sign_up.html')
    else:
       username = request.form.get['username']
       print("<h3>Welcome to our site </h3>'" + username + "'")
       email = request.form.get['email']
       print("Your email address is '" + email + "'")
       return render_template('sign_up.html')   


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegistrationForm(request.form)
    if request.method == 'POST' and form.validate():
        user = User(form.username.data, form.password.data,
                    form.confirmpassword.data)
        if form.password.data==form.confirmpassword.data:
           flash('Thanks for registering')
           return redirect(url_for('login'))
    else:
       flash("sorry, either password doesn't match or username was not provided")
       return render_template('sign_up.html', form=form)

@app.route('/')
def home():
    return render_template('home_page.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts_page.html')

#@app.route('/signup')
#def signup():     
#    return render_template('sign_up.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/profile')
def profile():
    form = RegistrationForm(request.form)
    if form.validate():
       return render_template('/security/profile.html')
    else:
       return render_template('sign_up.html', form=form)

@app.route('/accounts')
def accounts():
    form = RegistrationForm(request.form)
    if form.validate():
       return render_template('/security/accounts.html')
    else:
       return render_template('sign_up.html', form=form)


@app.route('/navigation/')
def navigation():
    return redirect(url_for('home')) 

@app.route('/products/')
def products():
    return render_template('products_page.html')

@app.route('/about')
def about():
    return render_template('about_page.html')

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
