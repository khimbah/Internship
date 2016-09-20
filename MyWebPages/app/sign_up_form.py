from flask import Flask 
from flask_wtf import Form
from wtforms import TextField, TextAreaField, SubmitField
from wtforms import validators, ValidationError

class RegistrationForm(Form):
      username = TextField("Name Of User",[validators.Required("Please enter your name.")])
      password= TextField("Password",[validators.Required("Please choose a password."), validators.DataRequired("Please choose a password.")])
      confirmpassword= TextField("Confirmpassword",[validators.Required("Please confirm your password."), validators.DataRequired("Please confirm /  your password.")])
      submit = SubmitField("Send")
