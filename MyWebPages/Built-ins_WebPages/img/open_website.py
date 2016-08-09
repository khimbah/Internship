
from flask import Flask
from flask import Response

app = Flask(__name__)

@app.route('/<name>')
     def return_website():
         f = open('/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/','r')
         data = f.read()
         f.close()
         return Response(data, mimetype='text/html')

@app.route('/img/<name>'):
       def return_image(): 
           f = open('/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/img/','r')
           data = f.read()
           f.close()
           return Response(data, mimetype='image/jpg')


if __name__ == "__main__":
        app.run()

