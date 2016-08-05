from flask import Flask

app = Flask(__name__)

@app.route("/myname/<string:person>/")
def name(person):
    return "Hello " +person+ "!" 
    
    if __name__ == "__main__":
         app.run()
    

     
     

