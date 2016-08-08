from flask import Flask
from flask import Response
 
app = Flask(__name__)

@app.route('/img/Photo1266.jpg')
def return_image():
    f = open('/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/img/Photo1266.jpg','r+')
    data = f.read()
    f.close()
    return Response(data, mimetype='image/jpg')

if __name__ == "__main__":
        app.run()
    
