from flask import Flask
from flask import Response
from flask import render_template

app = Flask(__name__)

#app = Flask(static_folder='C:\\Some\\Directory')

@app.route("/home")
def webpage1():
  # return app.root_path
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/home_page.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')

@app.route('/navigation')
def webpage2():
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/navigation_bar.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')


@app.route('/products')
def webpage3():
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/products_page.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')



@app.route('/contacts')
def webpage4():
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/contacts_page.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')



@app.route('/about')
def webpage5():
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/about_page.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')



@app.route('/images')
def webpage6():
    f = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/carousel_page.html","r+")
    data = f.read()
    f.close()
    return Response(data, mimetype='text/html')



@app.route('/img/<path:img>')
def return_image(img):
    f = open('/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/img/','r+')
    data = f.read()
    f.close()
    return Response(data, mimetype='image/jpg')


if __name__ ==' __main__':
    app.run()
