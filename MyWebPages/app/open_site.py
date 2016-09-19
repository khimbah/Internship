from flask import Flask, send_from_directory, redirect, url_for, request, render_template
from flask import Response
#from open_site.py.database import db_session
from flask_login import login_required, current_user


app = Flask(__name__, static_folder='/home/cybernerd/Work/Internship/MyWebPages/app/', template_folder='/home/cybernerd/Work/Internship/MyWebPages/app/templates/')
app.debug=True

#@app.teardown_appcontext
#def shutdown_session(exception=None):
#    db_session.remove()

@app.route('/contact_handler', methods = ['POST','GET'])
def contact_handler():
    if request.method=='POST':
       email = request.form['email']
       print("The email address is '" + email + "'")
       return redirect('/')
    else:
       email = request.form.get['email']
       print("The email address is '" + email + "'")
       return redirect('/')   

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = RegistrationForm(request.form)
    if request.method == 'POST' and form.validate():
        user = User(form.username.data, form.password.data,
                    form.confirmpassword.data)
        if form.password.data==form.confirmpassword.data:
           db_session.add(user)
           flash('Thanks for registering')
           return redirect(url_for('login'))
    else:
           flash("sorry, either password doesn't match or username was not provided")
    return pass
       
    return render_template('signup.html', form=form)

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
@login_required
def profile():
    return render_template('/security/profile.html')

@app.route('/accounts')
@login_required
def accounts():
    return render_template('/security/accounts.html')


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
