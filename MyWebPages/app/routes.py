from flask import Flask, redirect, url_for, render_template, request
from forms import ContactForm

app = Flask(__name__) 
 
app.secret_key = 'mkinetics.com'

@app.route('/home')
def home():
  return render_template('home.html')

@app.route('/contact',methods=['GET','POST'])
def contact():
  form = ContactForm()
  if request.method == 'POST':
      user = request.form
      return redirect(url_for('success',person=user))    
  elif request.method == 'GET':
      return render_template('contact.html',form=form)

@app.route('/success/<string:person>/')
def success(person):
    return 'Welcome'+ person

@app.route('/hello/<string:person>/')
def hello(person):
    return render_template('home.html', name=person)
 
if __name__ == "__main__":
    app.run()

