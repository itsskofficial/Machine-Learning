from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import *
import json

app = Flask(__name__)
CORS(app, resource={r"/*" : {"origins" : "*"}})

@app.route("/")
def home():
    return {"message": "This is the backend of SMS Spam Classifier made with Flask"}

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    text = data["text"]
    result = classify(text)
    return jsonify(result = result)

if __name__ == "__main__":
    app.run(debug = True)