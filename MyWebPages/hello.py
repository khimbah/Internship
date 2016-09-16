from flask import Flask

app = Flask(__name__)

#@app.route('/')
#def hello_world():
 #  return 'Hello, World!'

# if __name__ == '__main__':
# app.run() 

@app.route('/Built-ins_WebPages/<path:path>')
def this_view():
   fd = open("/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages/img", 'r+')
   page_contents = fd.read()
   fd.close()
   return page_contents





