from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello, World!'

if __name__ == '__main__':
 app.run() 

#@app.route('/')
#def this_view():
   #fd = open("Built-ins_WebPages/Built-ins_WebPages/", 'r')
  # page_contents = fd.read()
 #  fd.close()
#   return page_contents





