from flask import Flask

app = Flask(__name__)

@app.route("/img/<img>")
def image_name(img):
    f = open('/home/cybernerd/Work/Internship/MyWebPages/Built-ins_WebPages', 'r')
    imgdata = f.read()
    f.close()
    return img

if __name__ == '__main__':
         app.run()

