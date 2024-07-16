from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

from routes import *

app = Flask(__name__)
@app.route('/')
def hello_world():
    return render_template('index.html')
    # return 'Hello,World!'


if __name__=="__main__":
    app.run(debug=True)
    